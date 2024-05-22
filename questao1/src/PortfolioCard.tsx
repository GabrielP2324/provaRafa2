import React from 'react';

interface PortfolioCardProps {
  title: string;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, category }) => {
  return (
    <div className="portfolio-card">
      <img src="https://via.placeholder.com/300" alt={title} />
      <h4>{category}</h4>
      <h3>{title}</h3>
      <button>Case Study</button>
    </div>
  );
}

export default PortfolioCard;
