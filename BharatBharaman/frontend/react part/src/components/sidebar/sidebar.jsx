import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineVideoLibrary, MdExplore, MdEventNote } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import './sidebar.css';
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar">
            <div style={{ height: "10px" }}></div>
            <Link to="/">
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <IoHome size={"24"} style={{ paddingLeft: "80px" }} />
                    <div className="s-name">Home</div>
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/shorts">
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <MdOutlineVideoLibrary size={"24"} style={{ paddingLeft: "80px" }} />
                    <div className="s-name">Shorts</div>
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/explore">
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <MdExplore size={"24"} style={{ paddingLeft: "80px" }} />
                    <div className="s-name">Explore</div>
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/events">
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <MdEventNote size={"24"} style={{ paddingLeft: "80px" }} />
                    <div className="s-name">Events</div>
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/maps">
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <TbMapSearch size={"24"} style={{ paddingLeft: "80px" }} />
                    <div className="s-name">Maps</div>
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
        </div>
    );
}

export default SideBar;