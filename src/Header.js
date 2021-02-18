import React from "react"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/SupervisedUserCircle';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


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
		<input placeholder= 'Search Facebook'
		type="text" />
		</div>
		</div>
		<div className="header__center">
		 <div className="header__option header__option--active">
			<HomeIcon fontsize="large" />
			</div>
			 <div className="header__option">
			<FlagIcon fontsize="large" />
			</div>
			 <div className="header__option">
			<SubscriptionOutlinedIcon fontsize="large" />
			</div>
			 <div className="header__option">
			<StorefrontOutlinedIcon fontsize="large" />
			</div>
			 <div className="header__option">
			<SupervisedUserCircleIcon fontsize="large" />
			</div>
		</div>
		<div className="header__right">
		<div className="header__info">
			<Avatar />
			<h4>Ionis</h4>
		</div>
		<IconButton>
			<AddIcon />
		 </IconButton>	
		 <IconButton>
			<ForumIcon/>
		 </IconButton>	<IconButton>
			<NotificationsActiveIcon />
		 </IconButton>	<IconButton>
			<ExpandMoreIcon />
		 </IconButton>
		</div>
	</div>
	)
}

export default Header 