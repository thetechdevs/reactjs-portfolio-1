import React from 'react';
import Card from 'react-bootstrap/Card';

// import CSS
import './RecentPortfolioCard.css';

const RecentPortfolioCard = ({ review }) => {
    return (
        <Card className="feedback">
            <div>
                <img className="slider__card" src={review.img} alt="" />
            </div>
        </Card >
    );
};

export default RecentPortfolioCard;