import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article, onSelect }) => {
    return (
        <div className="news-card" onClick={() => onSelect(article)}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
        </div>
    );
};

export default NewsCard;