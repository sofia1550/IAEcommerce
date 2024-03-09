import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import React, { Suspense } from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import styled from "styled-components";
import BodyBackgroundAnimation from "./effects&syles/BodyBackgroundAnimation";

const SlideContent1 = React.lazy(
  () => import("./slidesContents/slideContent1")
);
const SlideContent2 = React.lazy(
  () => import("./slidesContents/slideContent2")
);
const SlideContent3 = React.lazy(
  () => import("./slidesContents/slideContent3")
);
const SlideContent4 = React.lazy(
  () => import("./slidesContents/slideContent4")
);

const OverviewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: url("/a2.webp") no-repeat center center / cover;
  color: #ffffff;
  margin-top: 105px;
  margin-bottom: 105px;

  min-height: 60vh;
  width: 100%; 
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

export const OverviewContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
    border-radius: 20px; 
    filter: blur(10px);
    margin: -5px; 
  }
`;

export const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: "easeOut", 
    },
  },
};

const ProjectOverview: React.FC = () => {
  return (
    <OverviewContainer>
      <BodyBackgroundAnimation />
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
        speed={2600}
      >
        <Suspense fallback={<div>Cargando...</div>}>
          <SwiperSlide>
            {" "}
            <OverviewContent>
              <SlideContent1 />
            </OverviewContent>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <OverviewContent>
              <SlideContent2 />
            </OverviewContent>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <OverviewContent>
              <SlideContent3 />
            </OverviewContent>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <OverviewContent>
              <SlideContent4 />
            </OverviewContent>
          </SwiperSlide>
        </Suspense>
      </Swiper>
    </OverviewContainer>
  );
};

export default ProjectOverview;
