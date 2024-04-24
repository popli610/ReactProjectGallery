import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const Slider = ({ url, limit = 10 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=2&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  const onLeftClick = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const onRightClick = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>Loading data! please wait</div>;
  }

  if (errorMsg !== null) {
    return <div> Error occured! {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={onLeftClick}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={`author-${image.author}`}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onRightClick}/>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator" 
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Slider;
