import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "./style.scss"

SwiperCore.use([Navigation, Pagination, A11y])

const Banner = ({}) => {
  return (
    <div className="banner">
      <Swiper
        loop
        pagination={{
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          bulletActiveClass: "my-bullet-active",
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <StaticImage
            className="d-none d-md-block"
            loading="lazy"
            layout="fullWidth"
            placeholder="blurred"
            src="../../assets/images/banner1.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
          <StaticImage
            className="d-block d-md-none"
            loading="lazy"
            placeholder="blurred"
            src="../../assets/images/ydd-banner1.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="d-none d-md-block"
            loading="lazy"
            layout="fullWidth"
            placeholder="blurred"
            src="../../assets/images/banner2.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
          <StaticImage
            className="d-block d-md-none"
            loading="lazy"
            placeholder="blurred"
            src="../../assets/images/ydd-banner2.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="d-none d-md-block"
            loading="lazy"
            layout="fullWidth"
            placeholder="blurred"
            src="../../assets/images/banner3.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
          <StaticImage
            className="d-block d-md-none"
            loading="lazy"
            placeholder="blurred"
            src="../../assets/images/ydd-banner3.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vone"
            title="vone"
          />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  )
}

export default Banner
