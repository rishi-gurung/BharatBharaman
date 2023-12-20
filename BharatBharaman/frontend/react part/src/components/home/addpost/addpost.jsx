import React from "react";
import './addpost.css';
import { Link } from "react-router-dom";

function AddPost(){
    return(
        <div className="addpost">
            <div className="row-b" style={{padding: "10px"}}>
                <div className="avatar"></div>
                <div className="addposttext">Share your experience...</div>
            </div>
            <div className="row-b" style={{padding: "10px"}}>
                <div className="postbutn">Post</div>
                <Link to="/add/short" className="postbutn">Short</Link>
            </div>
        </div>
    );
}

export default AddPost;