import React from "react";

const StylizedImage = ({ src, alt, shadowDirection, width }) => {
  const getBoxShadow = (dir) => {
    switch (dir) {
      case "se":
        return "rgb(235 234 235) 25px 30px";

      case "nw":
        return "rgb(235 234 235) -25px -30px";

      case "ne":
        return "rgb(235 234 235) 25px -30px";

      case "sw":
        return "rgb(235 234 235) -25px 30px";

      default:
        break;
    }
  };

  return (
    <img
      className="img"
      src={src}
      alt={alt}
      style={{
        boxShadow: getBoxShadow(shadowDirection),
        width: width,
        zIndex: "-1",
      }}
    />
  );
};

export default StylizedImage;
