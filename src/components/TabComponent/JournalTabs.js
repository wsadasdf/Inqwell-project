import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
    text-decoration: none;
    color: #333333
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #BBD8E5;
      }
    &:visited{
        color: #333333;
    }
`;


const JournalTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="JournalTabs">
        {/* <ul className="second-nav">
            <TabNavItem title="Notebook Info" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Notebook Customization" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>

        <div className="outlet">
            <TabContent id="tab1" activeTab={activeTab}>
                <p>Tab 1</p>

            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
                <div className="journal-customs-container">
                    <div className="create-journal-title">
                        <p>Themes</p>
                        <FaIcons.FaEdit style={{width: "18px", height:"18px"}} />
                    </div>
                    <div className="journal-customs-theme-container">
                        <CustomLink to="/create/createjournalcustoms">
                            <div className="theme-1">
                                <div className="theme-box"><FaIcons.FaPlus style={{width: "18px", height:"18px", marginTop: "25px"}}/></div>
                                <p>Custom Theme</p>
                            </div>
                        </CustomLink>
                        <div className="theme-2">
                            <div className="theme-box"></div>
                            <p>Theme 2</p>
                        </div>
                        <div className="theme-3">
                            <div className="theme-box"></div>
                            <p>Theme 3</p>
                        </div>
                        <div className="theme-4">
                            <div className="theme-box"></div>
                            <p>Theme 4</p>
                        </div>
                        <div className="theme-5">
                            <div className="theme-box"></div>
                            <p>Theme 5</p>
                        </div>
                        <div className="theme-6">
                            <div className="theme-box"></div>
                            <p>Theme 6</p>
                        </div>
                        <div className="theme-7">
                            <div className="theme-box"></div>
                            <p>Theme 7</p>
                        </div>
                        <div className="theme-8">
                            <div className="theme-box"></div>
                            <p>Theme 8</p>
                        </div>
                    </div>
                    <div className="create-journal-title">
                        <p>Add Image</p>
                        <FaIcons.FaPlus style={{width: "18px", height:"18px"}}/>
                    </div>
                </div>

            </TabContent>
        </div> */}

    </div>
  );
};

export default JournalTabs;
