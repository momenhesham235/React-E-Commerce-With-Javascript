import { memo, useState } from "react";

const ProductImages = ({ images = [], title }) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="img_item">
      <div className="big_img">
        <img src={activeImg} alt={title} />
      </div>

      <div className="small_img">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt={title}
            onClick={() => setActiveImg(img)}
            className={activeImg === img ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProductImages);
