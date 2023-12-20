import React from "react";
import './topbar.css';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

function TopBar() {
    return (
        <div className="topbar">
            <div className="bb-logo">
                <img src="" alt="" />
            </div>
            <div className="row-b">
                <button className="bottom-icons" style={{ height: "60px", width: "60px" }}>
                    <BiMenuAltLeft size={"26"} />
                </button>
                <div className="t-bbot">
                    Talk to virtual guide...
                </div>
                <button id="m-search" className="bottom-icons" style={{ height: "60px", width: "60px" }}>
                    <IoIosSearch size={"26"}/>
                </button>
            </div>
            <div className="bbot">
                Talk to virtual guide...
            </div>
        </div>
    );
}

export default TopBar;