import React from "react";
import SideBar from "../../components/sidebar/sidebar";
import BottomBar from "../../components/bottombar/bottombar";
import RailNavigation from "../../components/rail/rail";
import TopBar from "../../components/topbar/topbar";
import './mappy.css';

function Mappy(){
    return(
        <div>
            <SideBar />
            <BottomBar />
            <RailNavigation />
            <TopBar />
            <iframe src="https://mappi.pages.dev/" frameborder="0" className="mappzy"></iframe>
        </div>
    );
}

export default Mappy;