import React from "react";
import './explore.css';
import SideBar from "../../components/sidebar/sidebar";
import BottomBar from "../../components/bottombar/bottombar";
import RailNavigation from "../../components/rail/rail";
import TopBar from "../../components/topbar/topbar";

function Explore() {
    return (
        <div>
            <SideBar />
            <BottomBar />
            <RailNavigation />
            <TopBar />
            <iframe className="main-resp" src="http://127.0.0.1:5500/Explore_page/explore_index.html" frameborder="0"></iframe>
        </div>
    );
}

export default Explore;