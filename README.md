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
