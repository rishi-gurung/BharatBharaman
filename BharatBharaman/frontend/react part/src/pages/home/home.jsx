import { React, useState, useEffect } from "react";
import SideBar from "../../components/sidebar/sidebar";
import BottomBar from "../../components/bottombar/bottombar";
import RailNavigation from "../../components/rail/rail";
import TopBar from "../../components/topbar/topbar";
import AddPost from "../../components/home/addpost/addpost";
import PostCard from "../../components/home/post/card";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {

    const params = useParams();
    const [postslist, setPostList] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:6060/posts/5')
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    });
    return (
        <div>
            <SideBar />
            <BottomBar />
            <RailNavigation />
            <TopBar />
            <div style={{ height: "10px" }}></div>
            <div className="main-resp">
                <div style={{ height: "10px" }}></div>
                <AddPost />
                <div style={{ height: "10px" }}></div>
                <PostCard /><PostCard /><PostCard /><PostCard />
                {postslist && postslist.map((item) => {
                    return <PostCard />
                })}
            </div>
        </div>
    );
}

export default Home;