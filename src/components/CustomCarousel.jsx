import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/components/CustomCarousel.css";
import { NextArrow, PrevArrow } from "/src/components/CustomArrows.jsx"; 

const CustomCarousel = ({ collections }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {collections.map(collection => {
        const imageUrl = collection.image_url;
        return (
          <div key={collection.id} className="relative">
            <a href={`/collections/${collection.id}`}>
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt={collection.name}
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: '3 / 2' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-light text-center py-2 px-4">
                      <h2 className="text-4xl font-serif uppercase">{collection.name}</h2>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-64 flex items-center justify-center bg-gray-200 text-black">
                  No image available
                </div>
              )}
            </a>
          </div>
        );
      })}
    </Slider>
  );
};

export default CustomCarousel;
