/* eslint-disable import/no-unresolved */
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

function SwiperTest() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                effect="fade"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="image-wrapper">
                        <Image src="/images/image-1.jpg" layout="fill" alt="image-1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-wrapper">
                        <Image src="/images/image-2.jpg" layout="fill" alt="image-1" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <style jsx>
                {`
                    .image-wrapper {
                        width: 90%;
                        height: calc(100vh - 10rem - 2rem);
                        position: relative;
                        margin: auto;
                    }

                    :global(.swiper-button-next) {
                        background-image: url(/icons/arrow-right-thin.svg);
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        background-position: center;
                    }

                    :global(.swiper-button-prev) {
                        background-image: url(/icons/arrow-left-thin.svg);
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        background-position: center;
                    }

                    :global(.swiper-button-next::after) {
                        display: none;
                    }

                    :global(.swiper-button-prev::after) {
                        display: none;
                    }
                `}
            </style>
        </>
    )
}
export default SwiperTest
