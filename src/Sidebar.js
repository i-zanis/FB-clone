import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
function Sidebar() {
	return (
		<div classname="sidebar">
		<SidebarRow src = {"placeholder"} title = {user.displayName} />
		<SidebarRow Icon = {LocalHospitalIcon}
		title = "Covid-19 Information Center"
		/>
		<SidebarRow Icon = {EmailFlagsIcon} title = "Pages" />
		<SidebarRow Icon = {PeopleIcon} title = "Friends" />
		<SidebarRow Icon = {ChatIcon} title = "Messenger" />
		<SidebarRow Icon = {StorefrontIcon} title = "Marketplace" />
		<SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
		<SidebarRow Icon = {ExpandMoreOutlined} title = "Pages" />
		</div>
	);
	}
	export default Sidebar;
