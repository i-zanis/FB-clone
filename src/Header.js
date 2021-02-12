import React from "react"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionOutlined from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';

function Header() {
	return (
	<div className = "header">
		<div className="header__left">
		<img 
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/401px-F_icon.svg.png"
		alt = "" 
	/>
	<div className="header__input">
	<SearchIcon/>
	<input type = "text" />
	</div>
	</div>
		<div className="header__middle">
		 <div className="header__option">
			<HomeIcon fontsize="large" />
			</div>
		</div>
		<div className="header__right"></div>
	</div>
	)
}

export default Header 