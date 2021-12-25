import React, { useState } from 'react';
import '../basic/style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Footer from './Footer';

const uniqueList=[
... new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    }
    )
),
"All",
];
const Restaurant = () => {

   const [menuData, setMenuData] = useState(Menu);
   const [menuList, setMenuList] = useState(uniqueList);
   
   const filterItem=(category)=>
{
    if(category=== "All" || category===""){
        setMenuData(Menu);
        return;
    }
     const updatedList = Menu.filter((curElem)=>
     {
         return curElem.category===category;
     }
     );
     setMenuData(updatedList);
}
    return (
        <> 
        <h1 className='center'><img className="text" src='../images/sweet.jpg' /> Sulemani Restaurant </h1>
        <Navbar filterItem={filterItem} menuList={menuList} />
         <MenuCard menuData={menuData} />
         <Footer />
            
        </>
    );
};

export default Restaurant;
