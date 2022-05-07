import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
const Nav = styled.div`
background: #FFFFFF;
height: 80px;
display: flex;
border: 1px solid #333333;
justify-content: space-between;
/* justify-content: flex-start; */
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #FFFFFF;
width: 250px;
height: 100vh;
display: flex;
border: 1px solid #333333;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 30px;
  background: #BBD8E5;
  padding: 10px 22px;
  color: #333333;
  outline: none;
  border: 1px solid #333333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #333333;
    color: #FFFFFF;
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  textAlign: center;
  color: #333333;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  &:hover{
    transition: all 0.2s ease-in-out;
    color: #BBD8E5;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);
    const logOut = () => {
        Auth.signOut().then(() => { console.log('successful log out'); }) /*logs if the user successfully logs in*/
            .catch(() => { console.log('error logging out'); })/*logs if the user encounters an error logging out*/
    };


return (
	<>
	<IconContext.Provider value={{ color: "#333333" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
                <NavLogo to='/pages/index'>Inqwell</NavLogo>
                <button onClick={logOut}>Log Out</button>

        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>

	</IconContext.Provider>
	</>
);
};

export default Sidebar;
