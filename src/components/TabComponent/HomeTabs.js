import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateLink = styled(Link)`
    text-decoration: none;
`;

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="HomeTabs">
        <ul className="second-nav">
            <TabNavItem title="Journals" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Entries" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Media" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>

        <div className="outlet">
            {/* content will be shown here */}
            <TabContent id="tab1" activeTab={activeTab}>
                <CreateLink to="/create/createjournal">
                    <div className="journal-flex-container">
                        <div className="create-journal">
                        <div className="create-journal-title">Create New Journal</div>
                        <button className="create-journal-button"><FaIcons.FaPlus style={{width: "30px", height:"30px"}}/></button>
                        <div></div>
                        </div>
                    </div>
                </CreateLink>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
                <CreateLink to="/create/createjournalentry">
                    <div className="journal-flex-container">
                        <div className="create-journal">
                        <div className="create-journal-title">Create New Entry</div>
                        <button className="create-journal-button"><FaIcons.FaPlus style={{width: "30px", height:"30px"}}/></button>
                        <div></div>
                        </div>
                    </div>
                </CreateLink>
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
                <div className="journal-flex-container">
                    <div className="create-journal">
                    <div className="create-journal-title">Create New Media</div>
                    <button className="create-journal-button"><FaIcons.FaPlus style={{width: "30px", height:"30px"}}/></button>
                    <div></div>
                    </div>
                </div>
            </TabContent>
        </div>

    </div>
  );
};

export default HomeTabs;