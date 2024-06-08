import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ img, title, description, index, activeIndex, setActiveIndex, swiperIndex }) => {
  const isActive = index === activeIndex;

  useEffect(() => {
    if (index !== swiperIndex) {
      setActiveIndex(null); 
    }
  }, [swiperIndex, index, setActiveIndex]);

  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className="article-container">
      <div className={`article ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="article-content">
          <h2 className="article-title">{title}</h2>
          <img src={img} alt={title} className="article-image" />
        </div>
        <div className="circles">
          {[...Array(3)].map((_, circleIndex) => (
            <span
              key={circleIndex}
              className={`circle ${circleIndex === swiperIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        <p className="article-description">{description}</p>
      </div>
    </div>
  );
};

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
  swiperIndex: PropTypes.number.isRequired
};

export default Article;
