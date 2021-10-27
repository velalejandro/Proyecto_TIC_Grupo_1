import React, { useState } from 'react';
import NavBar from './NavBar';
import SideAnimation from './SideAnimation';
import '../styles/StylesNav.css';

export const SideBarContext = React.createContext({})

const SideBar = () =>{
  const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <SideBarContext.Provider
        value={{ isShowSidebar, setIsShowSidebar }}
        >
        <div
          className={`herramientas--${ isShowSidebar ? 'show' : 'hide'}`}
         
        ></div><NavBar
        role="button"
        onClick={() => setIsShowSidebar(false)}
       /><SideAnimation/>

        
         </SideBarContext.Provider>
        
    );
};

export default SideBar;
