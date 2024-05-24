import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../productCard/productCard"; // Ajusta la importación según tu estructura
import MoreProductsGrid from "./moreProductGrid";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { setShowMore } from "../../../../redux/features/product/productSlice";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  SectionTitle,
  PreviewContainer,
  ViewMoreButtonContainer,
  ViewMoreButtonStyled,
} from "./productPreviewStyles";
import { Product } from "@/app/types/types";

interface ProductPreviewSectionProps {
  products: Product[];
}

const ProductPreviewSection: React.FC<ProductPreviewSectionProps> = ({
  products,
}) => {
  const dispatch = useAppDispatch();
  const showMore = useAppSelector((state) => state.product.showMore);

  const handleViewMore = () => {
    dispatch(setShowMore(!showMore));
  };

  const slidesPerView = products.length < 3 ? products.length : 3;

  return (
    <PreviewContainer>
      <SectionTitle variant="h4">Productos Destacados</SectionTitle>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={products.length >= 4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: slidesPerView, spaceBetween: 30 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ViewMoreButtonContainer>
        <ViewMoreButtonStyled variant="contained" onClick={handleViewMore}>
          {showMore ? "Ver Menos" : "Ver Más"}
        </ViewMoreButtonStyled>
      </ViewMoreButtonContainer>
      {showMore && <MoreProductsGrid products={products} />}
    </PreviewContainer>
  );
};

export default ProductPreviewSection;
