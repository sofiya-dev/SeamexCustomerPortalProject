
import React, { useState } from "react";
import "./../styles/DigitalProducts.css";
import { Text, Dialog, DialogType, IconButton, Stack } from "@fluentui/react";

// Main Product Images
import poornataPortal from "../assets/PoornataPortalImage.png"; 
import poornataApp from "../assets/PoornataAppImage.png";
import ava from "../assets/AVAImage.png";

// Popup Images for each product
import portalImage1 from "../assets/PortalPopupImage1.png";
import portalImage2 from "../assets/PortalPopupImage2.png";
import portalImage3 from "../assets/PortalPopupImage3.png";

import appImage1 from "../assets/AppPopupImage1.png";
import appImage2 from "../assets/AppPopupImage2.png";

import avaImage1 from "../assets/AVAPopupImage1.png";
import avaImage2 from "../assets/AVAPopupImage2.png";

const DigitalProducts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [popupData, setPopupData] = useState({ title: "", images: [] });

  const openPopup = (title, images) => {
    setPopupData({ title, images });
    setIsDialogOpen(true);
  };

  const closePopup = () => {
    setIsDialogOpen(false);
    setPopupData({ title: "", images: [] });
  };

  const products = [
    {
      title: "Poornata Portal",
      image: poornataPortal,
      description: "For Desktop",
      onClick: () => openPopup("Poornata Portal", [portalImage1, portalImage2, portalImage3]),
    },
    {
      title: "Poornata App",
      image: poornataApp,
      description: "For Mobile",
      onClick: () => openPopup("Poornata App", [appImage1, appImage2]),
    },
    {
      title: "AVA",
      image: ava,
      description: "For Both",
      onClick: () => openPopup("AVA", [avaImage1, avaImage2]),
    },
  ];

  return (
    <div className="digitalProductsContainer">
      <Text variant="xxLarge" className="digitalProductsTitle">Digital Products</Text>
      <div className="productsGrid">
        {products.map((product, index) => (
          <div
            key={index}
            className="productCard"
            onClick={product.onClick}
            style={{ cursor: "pointer" }}
          >
            <Text variant="xLarge" className="productTitle">{product.title}</Text>
            <div className="imageWrapper">
              <img src={product.image} alt={product.title} className="productImage" />
            </div>
            <Text variant="medium" className="productDescription">{product.description}</Text>
          </div>
        ))}
      </div>

      {/* Popup Dialog */}
      <Dialog
        hidden={!isDialogOpen}
        onDismiss={closePopup}
        dialogContentProps={{
          type: DialogType.normal,
          title: popupData.title,
        }}
        modalProps={{ 
          isBlocking: true,
          styles: {
            main: {
              width: 'auto',
              height: 'auto',
             resize: 'both',   
             overflow: 'auto',  
            },
          },
        }}
      >
        <Stack tokens={{ childrenGap: 10 }}>
          {popupData.images.map((img, index) => (
            <img key={index} src={img} className="popupImage" alt={`${popupData.title} ${index + 1}`} />
          ))}
        </Stack>
        <IconButton
          iconProps={{ iconName: "Cancel" }}
          onClick={closePopup}
          className="closeButton"
          ariaLabel="Close popup"
        />
      </Dialog>
    </div>
  );
};

export default DigitalProducts;
