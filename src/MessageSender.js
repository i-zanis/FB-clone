import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function MessageSender() { src, Icon, title }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return ( 
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <div className="messageSender__top">
                    <input
                        className="messageSender_input"
                        placeholder={"What's on your mind"}
                    />
                    <input placeholder="image URL (Optional)" />
                    <button onClick={handSubmit} type="submit">
                        Hidden submit
                    </form>
            </div>
            <div className="messageSender_bottom"></div>
        </div>
    );
}

export default MessagerSender;
