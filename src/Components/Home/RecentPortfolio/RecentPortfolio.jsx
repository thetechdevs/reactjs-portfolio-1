import RecentPortfolioCard from './RecentPortfolioCard/RecentPortfolioCard';
// import CSS 
import './RecentPortfolio.css';
// import dummyData
import recentProjects from '../../../dummyData/recentProjects/recentProjects';
// import swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SCSS for carousel
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const RecentPortfolio = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container text-center" style={{ color: "#270D3D" }}>
                <h3 className="section-title font-weight-bold">Recent Project</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit provident maiores veniam eveniet molestias sint perferendis labore, dicta cumque inventore reprehenderit nesciunt totam rerum cum tempore impedit a unde sunt!</p>
            </div>
            <Swiper
                spaceBetween={25}
                slidesPerView={recentProjects.length === 1 ? 1 : recentProjects.length === 2 ? 2 : 3}
                loop
                loopFillGroupWithBlank
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => ''}
                onSlideChange={() => ''}
                breakpoints={{
                    // when window width is >= 280px
                    280: {
                        width: 280,
                        slidesPerView: 1
                    },
                    // when window width is >= 320px
                    320: {
                        width: 320,
                        slidesPerView: 1
                    },
                    // when window width is >= 360px
                    360: {
                        width: 360,
                        slidesPerView: 1
                    },
                    // when window width is >= 411px
                    411: {
                        width: 411,
                        slidesPerView: 1
                    },
                    // when window width is >= 375px
                    375: {
                        width: 375,
                        slidesPerView: 1
                    },
                    // when window width is >= 520px
                    520: {
                        width: 520,
                        slidesPerView: 1
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2
                    },
                    // when window width is >= 1024px
                    1024: {
                        width: 1024,
                        slidesPerView: 3
                    }
                }}
            >
                {
                    recentProjects.map(review => (
                        <SwiperSlide key={review.id}>
                            <div className="m-auto">
                                <RecentPortfolioCard review={review} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    );
};

export default RecentPortfolio;