import React from 'react';


const NewsItem = ({passItem}) => {
  
  return (
      <div style={{borderBottom: "2px solid grey"}}>
         <h1>{passItem.title}</h1>
         <div>{passItem.text}</div>
      </div>
    );
  
}

export default NewsItem;