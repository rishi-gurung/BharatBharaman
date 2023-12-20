import React from "react";
import './rail.css';
import { IoHome } from "react-icons/io5";
import { MdOutlineVideoLibrary, MdExplore, MdEventNote } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

function RailNavigation() {
    return (
        <div className="rail-nav">
            <div style={{ height: "10px" }}></div>
            <Link>
                <button className="bottom-icons">
                    <IoHome size={"24"} />
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link>
                <button className="bottom-icons">
                    <MdOutlineVideoLibrary size={"24"} />
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/explore">
                <button className="bottom-icons">
                    <MdExplore size={"24"} />
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/events">
                <button className="bottom-icons">
                    <MdEventNote size={"24"} />
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
            <Link to="/maps">
                <button className="bottom-icons">
                    <TbMapSearch size={"24"} />
                </button>
            </Link>
            <div style={{ height: "10px" }}></div>
        </div>
    );
}

export default RailNavigation;