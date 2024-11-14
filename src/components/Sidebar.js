import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setCategory }) => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    return (
        <div className="sidebar">
            <h2>News Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category} onClick={() => setCategory(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;