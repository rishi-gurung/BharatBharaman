import React from "react";
import SideBar from "../../components/sidebar/sidebar";
import BottomBar from "../../components/bottombar/bottombar";
import RailNavigation from "../../components/rail/rail";
import TopBar from "../../components/topbar/topbar";
import './eventsz.css';

function Events() {
    return (
        <div>
            <SideBar />
            <BottomBar />
            <RailNavigation />
            <TopBar />
            <iframe className="main-resp" src="http://127.0.0.1:5501/index.html" frameborder="0"></iframe>
        </div>
    );
}

export default Events;