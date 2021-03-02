import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import VideocamIcon from "material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icon/InsertEmoticon";
import React, { useState } from "react";


function MessageSender() { src, Icon, title }) {
    const [input, setInput] = useState("");
    const [imageURL, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Database

        setInput("");
        setImageURl("");
    }
    return ( 
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    <input 
                        className="messageSender__input"
                        place={"What's on your mind"}
                    /> 
                    value = {imageUrl}
                    onChange{(e) => setImageUrl(e.target.value)}
                    <input placeholder="image ULR (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                        </button>   
                </form>
            </div>

            <div className="messageSender bottom">
                <div className="messageSender__option">
                    <VideocamIcon style {{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "orange" }}
                    />
                    <h3>Feeling/Activity</h3>
                </div>  
            </div>
        </div>
    );
}

export default MessagerSender;
