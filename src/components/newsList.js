import React, {Component} from 'react';
import NewsItem from './newsItem'


    class NewsList extends Component {
    
      render() { 
        
        const parsedArrayItem = this.props.transfer.map((item) =>{
          return(
              <NewsItem passItem={item} key={item.id}/>
          )});
        
          
          return (
            <div>
              newsList
              
              {parsedArrayItem}
            </div>
          );
      }
  }

export default NewsList;