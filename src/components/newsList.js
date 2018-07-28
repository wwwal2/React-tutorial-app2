import React from 'react';

import NewsItem from './newsItem'

const NewsList = (props) => {

    const parsedArrayItem = props.transfer.map((item) =>{
        return(
            <NewsItem passItem={item} key={item.id}/>
        )
    });

    return (
      <div>
        newsList
        {parsedArrayItem}
      </div>
    );
  }

export default NewsList;