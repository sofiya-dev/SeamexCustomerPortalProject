import React from "react";
import "./../styles/DigitalProducts.css";
import { Text } from "@fluentui/react";
import poornataPortal from "../assets/PoornataPortalImage.png"; 
import poornataApp from "../assets/PoornataAppImage.png";
import ava from "../assets/AVAImage.png";

const DigitalProducts = () => {
  const products = [
    {
      title: "Poornata Portal",
      image: poornataPortal,
      description: "For Desktop",
    },
    {
      title: "Poornata App",
      image: poornataApp,
      description: "For Mobile",
    },
    {
      title: "AVA",
      image: ava,
      description: "For Both",
    },
  ];

  return (
    <div className="digitalProductsContainer">
      <Text variant="xxLarge" className="digitalProductsTitle">Digital Products</Text>
      <div className="productsGrid">
        {products.map((product, index) => (
          <div key={index} className="productCard">
            <Text variant="xLarge" className="productTitle">{product.title}</Text>
            <div className="imageWrapper">
                
              <img src={product.image} alt={product.title} className="productImage" />
            </div>
            
            <Text variant="medium" className="productDescription">{product.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalProducts;
