import React from "react";
import './card.css';
import { CiHeart } from "react-icons/ci";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";

function PostCard() {
    return (
        <div className="pcard">
            <div className="row" style={{ padding: "10px" }}>
                <div className="avatar"></div>
                <div className="postusername">falana dhinkana</div>
            </div>
            <div className="row-a" style={{ padding: "10px" }}>
                <img style={{ width: "100%", borderRadius: "4px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s" alt="" />
            </div>
            <div className="row-e" style={{marginTop: "8px"}}>
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <CiHeart size={"24"} />
                    <div className="post-i-text">Like</div>
                </button>
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <MdOutlineInsertComment size={"24"} />
                    <div className="post-i-text">Like</div>
                </button>
                <button className="bottom-icons row" style={{ width: "auto" }}>
                    <FaRegShareFromSquare size={"24"} />
                    <div className="post-i-text">Like</div>
                </button>
            </div>
        </div>
    );
}

export default PostCard;