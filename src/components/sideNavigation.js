import React from 'react';
import SideNav from 'react-simple-sidenav';


const SideNavigation = () => {
  
  return (
      <div>
         <h1>Side navigation</h1>
         <div>text</div>
         <div>
            <SideNav
                title="Simple Sidenav"
                items={['Item 1', 'Item 2']}
                />  
         </div>
      </div>
    );
}

export default SideNavigation;