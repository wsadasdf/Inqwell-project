import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ColorPicker from "../Picker/ColorPicker";

const createLink = styled(Link)`
`;

const JournalCustomTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="JournalCustomTabs">
        <ul className="second-nav">
            <TabNavItem title="Color Palette" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Fonts" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Header" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Notebook Cover" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>

        <div className="outlet">
            {/* content will be shown here */}
            <TabContent id="tab1" activeTab={activeTab}>
            <div className="journal-customs-container">
                    <div className="journal-customs-title">
                        <p>Choose Your Colors</p>
                    </div>
                    <div className="journal-customs-color-container">
                        <div className="color-1">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="color-2">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="color-3">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="color-4">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="color-5">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="color-6">
                            <div className="color-box">
                                <ColorPicker/>
                            </div>
                        </div>
                    </div>
                </div>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
                <div className="journal-customs-container">
                    <div className="journal-customs-font">
                        <p>Heading</p>
                        <input></input>
                    </div>
                    <div className="journal-customs-font">
                        <p>Body</p>
                        <input className="journal-customs-font-dropdown" type="text" name="journal_title" required="required" placeholder="Enter journal title"></input>
                    </div>
                </div>
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
                <div className="journal-customs-container">
                    <div className="journal-customs-title">
                            <p>Header Layouts</p>
                    </div>
                    <div className="journal-customs-header-container">
                        <div className="header-1">
                            <div className="header-box">
                                
                            </div>
                        </div>
                        <div className="header-2">
                            <div className="header-box">

                            </div>
                        </div>
                        <div className="header-3">
                            <div className="header-box">

                            </div>
                        </div>
                        <div className="header-4">
                            <div className="header-box">

                            </div>
                        </div>
                    </div>

                </div>
            </TabContent>
            <TabContent id="tab4" activeTab={activeTab}>
                <div className="journal-customs-container">
                    <div className="journal-customs-title">
                        <p>Cover Color</p>
                    </div>
                    <div className="journal-customs-color-container">
                        <div className="color-1">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-2">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-3">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-4">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-5">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-6">
                            <div className="cover-color-box">
                            </div>
                        </div>
                    </div>
                    <div className="journal-customs-title">
                        <p>Pattern</p>
                    </div>
                    <div className="journal-customs-color-container">
                        <div className="color-1">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-2">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-3">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-4">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-5">
                            <div className="cover-color-box">
                            </div>
                        </div>
                        <div className="color-6">
                            <div className="cover-color-box">
                            </div>
                        </div>
                    </div>
                    <div className="journal-customs-title">
                        <p>Add Image</p>
                        <FaIcons.FaPlus style={{width: "18px", height:"18px"}}/>
                    </div>
                </div>
            </TabContent>
        </div>
    </div>
  );
};

export default JournalCustomTabs;
