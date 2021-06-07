import React from "react";
import "./Sidebar.css";
import SidebarOption from './SidebarOption'
import { MdAcUnit } from 'react-icons/md';
import { IoHome } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { IoIosNotifications } from "react-icons/io";
import { GiLetterBomb } from "react-icons/gi";
import { BsFillBookmarksFill} from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Button } from "@material-ui/core";
import { IconContext } from "react-icons";
import firebaseApp from './firebase' ;


function Sidebar() {

    return (

        <IconContext.Provider value={{ style: { verticalAlign: 'center' } }}>

        <div className="sidebar">
          <MdAcUnit className="sidebar__twitterIcon" size="1.5em"/>

          <SidebarOption active Icon={ IoHome } text="Home" />  
          <SidebarOption Icon={FcSearch} text="Explore" />  
          <SidebarOption Icon={IoIosNotifications} text="Notifications" />
          <SidebarOption Icon={GiLetterBomb} text="Messages" />
          <SidebarOption Icon={BsFillBookmarksFill} text="Bookmarks" />
          <SidebarOption Icon={FaRegListAlt} text="Lists" />
          <SidebarOption Icon={BsPersonFill} text="Profile" />
          <SidebarOption Icon={CgMoreO} text="More" />

          <Button onClick={() => firebaseApp.auth().signOut()} variant="outlined" className="sidebar__tweet">
              logout
          </Button> 

          <Button variant="outlined" className="sidebar__tweet" fullWidth>
              Ping
          </Button> 
        </div>      
        </IconContext.Provider>
    )

}

export default Sidebar;
