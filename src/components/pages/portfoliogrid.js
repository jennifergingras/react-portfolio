import React from 'react';

const PortfolioGrid = (props) => {
  return (
    <div className="project-img">
      <img className="thumbnail-img" alt={props.title} src={require(`../../images/thumbnails/${props.thumbnail}`)} />
    </div>
  );
};

export default PortfolioGrid;