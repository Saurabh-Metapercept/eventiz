import React from 'react';

// Import images from src/css/images folder
import aaImg from '../css/images/aa.jpg';
import bbImg from '../css/images/bb.jpg';
import ccImg from '../css/images/cc.jpg';

const NewsArticles = () => {
  return (
    <section className="news-section">
      <div className="news-section__content">
        <span className="news-section__subtitle">Our News & Articles</span>
        <h2 className="news-section__title">
          Our <span className="highlight">News</span> & <span className="pink">ARTICLES</span>
        </h2>

        <div className="news-section__cards">
          {/* Card 1 */}
          <div className="news-card">
            <div className="news-card__image">
              <img src={aaImg} alt="News 1" />
              <span className="badge">Ecommerce</span>
            </div>
            <div className="news-card__content">
              <h3>How To Optimize Your Blog For High Ranking</h3>
              <a href="#" className="read-more">Continue Reading</a>
              <p className="meta">August 25, 2022 | No Comments</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="news-card">
            <div className="news-card__image">
              <img src={bbImg} alt="News 2" />
              <span className="badge">Inspiration</span>
            </div>
            <div className="news-card__content">
              <h3>Runner With Autism Graces Of Women</h3>
              <a href="#" className="read-more">Continue Reading</a>
              <p className="meta">August 25, 2022 | No Comments</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="news-card">
            <div className="news-card__image">
              <img src={ccImg} alt="News 3" />
              <span className="badge">Public</span>
            </div>
            <div className="news-card__content">
              <h3>Services To Grow Your Business Sell Affiliate</h3>
              <a href="#" className="read-more">Continue Reading</a>
              <p className="meta">August 25, 2022 | No Comments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
