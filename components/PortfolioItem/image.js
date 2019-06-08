import { ImageBg } from './style';

const PortfolioImage = ({ data: { images } }) => (
  <>
    <ImageBg data-background={images.desktop} className="swiper-lazy desktop">
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </ImageBg>
    <ImageBg data-background={images.mobile} className="swiper-lazy mobile">
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </ImageBg>
  </>
);

export default PortfolioImage;
