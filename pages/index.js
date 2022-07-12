import SwiperInternal from '../components/Swiper/Swiper'
import { Tabs } from '../components/ui/Tabs'
import Cards from '../components/ui/Cards'

export default function Home() {
    return (
        <>
            <div className="content">
                <div className="carousel">
                    <SwiperInternal />
                </div>

                <div className="section-products">
                    <Tabs />
                    <Cards />
                </div>
            </div>

            <style jsx>
                {`
                    .content {
                        background-color: var(--palette-common-white);
                        padding: 0 10%;
                    }

                    .carousel {
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    )
}
