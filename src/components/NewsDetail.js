import React from 'react';
import './NewsDetail.css';

const NewsDetail = ({ article, onClose }) => {
    return (
        <div className="news-detail">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default NewsDetail;