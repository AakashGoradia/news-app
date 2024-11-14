import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';
import './App.css';
import { API_KEY } from './utils/config';

const App = () => {
    const [news, setNews] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [category, setCategory] = useState('general');

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`);
            setNews(response.data.articles);
        };
        fetchNews();
    }, [category]);

    const handleArticleSelect = (article) => {
        setSelectedArticle(article);
    };

    return (
        <div className="app">
            <Sidebar setCategory={setCategory} />
            <div className="news-list">
                {news.map((article, index) => (
                    <NewsCard key={index} article={article} onSelect={handleArticleSelect} />
                ))}
            </div>
            {selectedArticle && <NewsDetail article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
        </div>
    );
};

export default App;