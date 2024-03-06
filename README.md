# I. Obverser Pattern

## 1. Định nghĩa

- Là một mẫu thiết kế phần mềm mà một đối tượng, gọi là subject, duy trì một danh sách các thành phần phụ thuộc nó, gọi là `obverser`, và thông báo tới chúng một cách tự động về bất cứ thay đổi nào, thường thì bằng các gọi hàm của chúng.

## 2. Code

### user.context.jsx

```javascript
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
```

### firebase.utils.js

Thêm vào file firebase.utils.js

```javascript
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
```

# II. Redux

## 1. Định nghĩa

## 2. Code

### 2.1. Curry function

Currying là một kỹ thuật trong lập trình hàm, nơi một hàm với nhiều đối số được chuyển đổi thành một chuỗi các hàm, mỗi hàm trong chuỗi đó chỉ chấp nhận một đối số duy nhất

```javascript
function add(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8
```

# II. Redux-Saga

## 1.Function generator

### 1.1. Sử dụng cơ bản

```javascript
function* check() {
  yield 1;
  yield 2;
  yield 3;
}

const c = check();
c.next(); // return { value: 1, done: false}
c.next(); // return { value: 2 done: false}
c.next(); // return { value: 3, done: false}
c.next(); // return { value: undefined, done: true}
```

### 1.2. Xử lý Tác vụ Đồng bộ và Không Đồng bộ

```javascript
function* exampleGenerator() {
  yield 1;
  yield 2;

  // Xử lý tác vụ đồng bộ
  const result = yield someAsyncFunction();

  yield result + 1;
}
```

### 1.3 Redux Saga

`Redux Saga` là một thư viện middleware cho Redux sử dụng function generator để quản lý và xử lý các tác vụ không đồng bộ trong ứng dụng Redux. Các effect như call, put, take, và fork giúp linh hoạt điều khiển luồng.

Các hàm và actions: <br>
`takeLatest`: Là một hàm hỗ trợ từ Redux Saga giúp lắng nghe một loại action cụ thể và chạy một hàm saga khi action đó được dispatch. Nếu một action khác cùng loại được dispatch trong khi saga vẫn đang chạy, nó sẽ hủy bỏ lời gọi trước và bắt đầu một lời gọi mới.

`all`: Là hàm hỗ trợ khác từ Redux Saga cho phép chạy nhiều sagas cùng một lúc.

`call`: Được sử dụng để gọi các hàm không đồng bộ. Nó trả về một mô tả Effect yêu cầu middleware gọi hàm đó.

`put`: Dispatch một action Redux. Trong ngữ cảnh này, nó được sử dụng để dispatch các action thành công hoặc thất bại dựa trên kết quả của hoạt động không đồng bộ.

`take`: Lắng nghe một loại action cụ thể và tạm dừng generator cho đến khi action đó được dispatch.

```javascript
import { takeLatest, call, put } from "redux-saga/effects";

function* fetchData() {
  try {
    const data = yield call(api.fetchData);
    yield put({ type: "FETCH_SUCCESS", data });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", error });
  }
}

function* watchFetchData() {
  yield takeLatest("FETCH_REQUESTED", fetchData);
}
```
