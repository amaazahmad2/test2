import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      let resp = await axios.get("https://fakestoreapi.com/products");
      setProductList(resp.data);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  }, []);

  return (
    <>
      {productList.length !== 0 ? (
        <>
          {productList.map((product) => {
            return <h1>{product.title}</h1>;
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Products;
