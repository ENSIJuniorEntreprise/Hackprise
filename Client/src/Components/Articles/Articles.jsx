import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Articles.css';
import ENSIJUNIOR from "./ENSIJUNIOR.png";
import Article from './Article';

const articlesData = [
  {
    img: ENSIJUNIOR,
    title: 'Article 1',
    description: 'article 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commrepudiandaeconsequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.article 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commrepudiandaeconsequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.'
  },
  {
    img: ENSIJUNIOR,
    title: 'Article 2',
    description: 'article 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commrepudiandaeconsequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.'
  },
  {
    img: ENSIJUNIOR,
    title: 'Article 3',
    description: 'article 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commrepudiandaeconsequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.'
  }
];

function Articles() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div className="container">
      <h1 className="heading">Articles</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 5,
          slideShadows : false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
      >
        {articlesData.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="article-wrapper">
              <Article
                img={article.img}
                title={article.title}
                description={article.description}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                swiperIndex={swiperIndex}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Articles;
