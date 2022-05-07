import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const createLink = styled(Link)`
`;

const FontTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="FontTabs">
        <ul className="second-nav">
            <TabNavItem title="Download Template" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Upload Template" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Build Font" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>

        <div className="outlet">
            {/* content will be shown here */}
            <TabContent id="tab1" activeTab={activeTab}>
                <div className="font-instructions">
                    <p>How to create your personalized font:</p>
                    <br></br>
                    <ol>
                        <li> <b><u>Download our template</u></b> and print it out.</li>
                        <li>Fill it out.</li>
                        <li>User a scanner, digital camera, or a smartphone to capture your filled-out template.</li>
                        <li>Select the <b>‘Upload Template’</b> button and upload your image file.</li>
                        <li> Finally, select the <b>‘Build font’</b> button and enjoy your new font!</li>
                    </ol>
                </div>
                <br></br>
                <button className="font-instructions-button">Download Template</button>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
                <div className="before-template">
                    <p>No characters yet.</p>
                </div>
                <div className="after-template">

                </div>
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
                <p>TAB 3</p>
            </TabContent>
        </div>

    </div>
  );
};

export default FontTabs;
