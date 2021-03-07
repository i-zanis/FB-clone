import React, {useEffect, useState} from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./components/post/Post";
import StoryReel from "./StoryReel";
import db from "./firebase";


function Feed() {
    const [posts, setPosts] = useState([]);
    // Runs only once when feed component loads
    // Connects to DB
    // Re-renders on changes
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic="https://avatars.githubusercontent.com/u/55964867?s=460&u=a73dc3447ec184cf813005fdba180efabb6b369b&v=4"
                    message="Test this"
                    timestamp="Time stamp check"
                    username="ioantest"
                    //profilePic={post.data.profilePic}
                    //message={post.data.message}
                    // timestamp={post.data.timestamp}
                    //username={post.data.username}
                    //image={post.data.image}
                />
            ))}
        </div>
    );
}

export default Feed;
