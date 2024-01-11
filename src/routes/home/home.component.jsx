// import { useEffect } from "react";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
// import SHOP_DATA from "../../mock-data/shop-data";

const Home = () => {
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const categories = [
    {
      id: 1,
      title: "Saffron",
      path: "saffron",
      imageUrl: "https://i.ibb.co/ZgXsMMY/saffron-1.jpg",
    },
    {
      id: 2,
      title: "Saffron mật ong",
      path: "saffron-mat-ong",
      imageUrl: "https://i.ibb.co/LkFrkqs/saffron-mat-ong-2.jpg",
    },
    {
      id: 3,
      title: "Bộ mỹ phẩm tinh chất Saffron",
      path: "bo-my-pham-saffron",
      imageUrl: "https://i.ibb.co/Tv9yNBK/set-qua.jpg",
    },
    {
      id: 4,
      title: "Các set quà sức khỏe - sắc đẹp",
      path: "set-qua-suc-khoe-sac-dep",
      imageUrl: "https://i.ibb.co/PjMBxYd/saffron-mat-ong-1.jpg",
    },
  ];

  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
