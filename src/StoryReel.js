import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Greenland_scoresby-sydkapp2_hg.jpg/1024px-Greenland_scoresby-sydkapp2_hg.jpg";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image={img}
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MediaWiki.svg/300px-MediaWiki.svg.png"
                title="James Tang"
            />
            <Story
                image={img}
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Digimon_Mini.jpg/1024px-Digimon_Mini.jpg"
                title="Digitalmon"
            />
            <Story
                image={img}
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/General_George_S_Patton.jpg/440px-General_George_S_Patton.jpg"
                title="Paton1945"
            />
            <Story
                image={img}
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Captainjamescookportrait.jpg/440px-Captainjamescookportrait.jpg"
                title="Cpt. Cook"
            />
            <Story
                image={img}
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/AnnBancroft2006-02-06.JPG/440px-AnnBancroft2006-02-06.JPG"
                title="Ann Bancroft"
            />
        </div>
    );
}

export default StoryReel;
