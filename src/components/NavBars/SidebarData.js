import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
    title: "Home",
    path: "/index",
    icon: <AiIcons.AiFillHome />,
},
{
	title: "Create",
	path: "/create",
	icon: <AiIcons.AiFillFolder />,
	iconClosed: <FaIcons.FaChevronDown/>,
	iconOpened: <FaIcons.FaChevronUp />,

	subNav: [
	{
		title: "New Journal",
		path: "/create/createjournal",
		icon: <FaIcons.FaBook />,
	},
	{
		title: "New Journal Entry",
		path: "/create/createjournalentry",
		icon: <FaIcons.FaFileAlt/>,
	},
	],
},
{
	title: "Personal Font",
	path: "/personalfont",
	icon: <FaIcons.FaFont />,
},
{
	title: "Profile",
	path: "/profile",
	icon: <FaIcons.FaPortrait />,
},
{
	title: "Sign Up",
	path: "/signup",
	icon: <FaIcons.FaEnvelopeOpenText />,
},
];
