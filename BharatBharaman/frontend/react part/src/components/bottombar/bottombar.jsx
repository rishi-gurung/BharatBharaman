import React from "react";
import './bottombar.css';
import { IoHome } from "react-icons/io5";
import { MdOutlineVideoLibrary, MdExplore, MdEventNote } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

function BottomBar() {
    return (
        <div className="bottombar">
            <div className="row-e">
                <button className="bottom-icons">
                    <IoHome size={"24"} />
                </button>
                <button className="bottom-icons">
                    <MdOutlineVideoLibrary size={"24"} />
                </button>
                <button className="bottom-icons">
                    <MdExplore size={"24"} />
                </button>
                <button className="bottom-icons">
                    <MdEventNote size={"24"} />
                </button>
                <button className="bottom-icons">
                    <TbMapSearch size={"24"} />
                </button>
            </div>
        </div>
    );
}

export default BottomBar;