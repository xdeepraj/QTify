import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Grid from "@mui/material/Grid2";

import { Navigation } from "swiper/modules";

import MediaCard from "../MediaCard/MediaCard";
import LeftArrow from "../arrow/LeftArrow";
import RightArrow from "../arrow/RightArrow";

import styles from "./Carousal.module.css";

const Carousel = ({ albumData }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleNavigationState = () => {
      const prevButton = prevRef.current;
      const nextButton = nextRef.current;

      if (prevButton && nextButton) {
        const prevDisabled = prevButton.classList.contains(
          "swiper-button-disabled"
        );
        const nextDisabled = nextButton.classList.contains(
          "swiper-button-disabled"
        );

        // Hide left arrow if disabled
        prevButton.style.display = prevDisabled ? "none" : "block";

        // Hide right arrow if disabled
        nextButton.style.display = nextDisabled ? "none" : "block";
      }
    };

    // Add mutation observer to track class changes
    const observer = new MutationObserver(handleNavigationState);
    const prevButton = prevRef.current;
    const nextButton = nextRef.current;

    if (prevButton && nextButton) {
      observer.observe(prevButton, {
        attributes: true,
        attributeFilter: ["class"],
      });
      observer.observe(nextButton, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // Initial check
    handleNavigationState();

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.carousel_container}`}>
      <div
        ref={prevRef}
        className={`${styles.customArrow} ${styles.customPrev}`}
      >
        <LeftArrow />
      </div>

      <div
        ref={nextRef}
        className={`${styles.customArrow} ${styles.customNext}`}
      >
        <RightArrow />
      </div>

      <Swiper
        slidesPerView={7}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={() => {
          // Trigger class checks on slide change
          const prevButton = prevRef.current;
          const nextButton = nextRef.current;

          if (prevButton && nextButton) {
            prevButton.classList.contains("swiper-button-disabled")
              ? (prevButton.style.display = "none")
              : (prevButton.style.display = "block");

            nextButton.classList.contains("swiper-button-disabled")
              ? (nextButton.style.display = "none")
              : (nextButton.style.display = "block");
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {albumData.map((album) => (
          <Grid container key={album.id} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
            <SwiperSlide>
              <MediaCard albumData={album} />
            </SwiperSlide>
          </Grid>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

// import React, { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";

// import Grid from "@mui/material/Grid2";

// import { Navigation } from "swiper/modules";

// import MediaCard from "../MediaCard/MediaCard";
// import LeftArrow from "../arrow/LeftArrow";
// import RightArrow from "../arrow/RightArrow";

// import styles from "./Carousal.module.css";

// const Carousel = ({ albumData }) => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className={`${styles.carousel_container}`}>
//       <div
//         ref={prevRef}
//         className={`${styles.customArrow} ${styles.customPrev}`}
//       >
//         <LeftArrow />
//       </div>

//       <div
//         ref={nextRef}
//         className={`${styles.customArrow} ${styles.customNext}`}
//       >
//         <RightArrow />
//       </div>

//       <Swiper
//         slidesPerView={7}
//         onBeforeInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         modules={[Navigation]}
//         className="mySwiper"
//       >
//         {albumData.map((album) => (
//           <Grid container key={album.id} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
//             <SwiperSlide>
//               <MediaCard albumData={album} />
//             </SwiperSlide>
//           </Grid>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
