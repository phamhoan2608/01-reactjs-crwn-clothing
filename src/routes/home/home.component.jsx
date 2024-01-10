import { useEffect } from "react";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import SHOP_DATA from "../../mock-data/shop-data";

const Home = () => {
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const categories = [
    {
      id: 1,
      title: "Saffron",
      path: "saffron",
      imageUrl: "https://i.ibb.co/TvLQ1DX/saffron-1.png",
    },
    {
      id: 2,
      title: "Saffron mật ong",
      path: "saffron-mat-ong",
      imageUrl: "https://i.ibb.co/bPs40Fg/saffron-mat-ong-2.png",
    },
    {
      id: 3,
      title: "Bộ mỹ phẩm tinh chất Saffron",
      path: "bo-my-pham-saffron",
      imageUrl: "https://i.ibb.co/V2cbrJ3/set-qua.png",
    },
    {
      id: 4,
      title: "Các set quà sức khỏe - sắc đẹp",
      path: "set-qua-suc-khoe-sac-dep",
      imageUrl: "https://i.ibb.co/R2h2krq/saffron-mat-ong-1.png",
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
