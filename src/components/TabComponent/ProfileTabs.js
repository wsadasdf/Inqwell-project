import './ProfilePagePer.css';
import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import { Link } from "react-router-dom";
import styled from "styled-components";

const createLink = styled(Link)`
`;

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("PersonalSection");

    return (
        <div className="ProfileTabs">
            <ul className="second-nav">
                <TabNavItem title="Personal Info" id="PersonalSection" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Billing Info" id="BillingSection" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Subscription" id="SubscriptionSection" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Analytics" id="AnalyticsSection" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Theme" id="ThemeSection" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>

            <div className="outlet">
                {/* content will be shown here */}
                <TabContent id="PersonalSection" activeTab={activeTab}>
                    <div className="MainFrame">



                        <div className="TextFieldsFrame">
                            <div className="ProfilePicFrame">



                                <div className="chooseAPhoto">
                                    <p>Choose A Photo</p>
                                    <div className="DragAndDrop">
                                        <p>or just Drag and Drop </p>
                                    </div>
                                </div>

                            </div>
                            <div className="FrameToHoldAllTF">


                                <div className="FirstName">
                                    <div className="ProfilePageFirstNameText">
                                        <p>First Name</p>
                                    </div>
                                    <input className="FirstName_input" type="text" placeholder="Fist Name">
                                    </input>
                                </div>

                                <div className="LastName">
                                    <div className="ProfilePageLastNameText">
                                        <p>Last Name</p>
                                    </div>
                                    <input className="LastName_input" type="text" placeholder="Last Name">
                                    </input>
                                </div>

                                <div className="ProfilePageEmail">
                                    <div className="ProfilePageEmailText">
                                        <p>Email</p>
                                    </div>
                                    <input className="ProfilePageEmail_input" type="text" placeholder="user@gmail.com">
                                    </input>
                                </div>

                                <div className="ProfilePagePhoneNum">
                                    <div className="ProfilePagePhoneText">
                                        <p>Phone Number</p>
                                    </div>
                                    <input className="ProfilePagePhoneNum_input" type="tel" placeholder="+1 (123) 456-7890">
                                    </input>
                                </div>

                                <div className="DateBox">
                                    <div className="ProfilePageDateBirthText">
                                        <p>Date Of Birth</p>
                                    </div>
                                    <div className="ProfilePageDay">
                                        <div>
                                            <input className="ProfilePageDay_input" type="text" placeholder="Day" />
                                        </div>
                                    </div>
                                    <div className="ProfilePageMonth">
                                        <div>
                                            <input className="ProfilePageMonth_input" type="text" placeholder="Month" />
                                        </div>
                                    </div>
                                    <div className="ProfilePageYear">
                                        <div>
                                            <input className="ProfilePageYear_input" type="text" placeholder="Year" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </TabContent>
                <TabContent id="BillingSection" activeTab={activeTab}>
                    <div className="MainFrameBill">



                        <div className="TextFieldsFrame">
                            <div className="FrameToHoldAllTFBill">
                                <div className="FirstNameBill">
                                    <div className="ProfilePageFirstNameText">
                                        <p>First Name</p>
                                    </div>
                                    <input className="FirstNameBill_input" type="text" placeholder="Fist Name">
                                    </input>
                                </div>

                                <div className="ProfilePageNameOnCardText">
                                    <div className="ProfilePageLastNameText">
                                        <p>Last Name</p>
                                    </div>
                                    <input className="ProfilePageNameOnCardText_input" type="number" placeholder="123456789">
                                    </input>
                                </div>

                                <div className="ProfilePageAddress">
                                    <div className="ProfilePageAddresstext">
                                        <p>Address</p>
                                    </div>
                                    <input className="ProfilePageAddress_input" type="text" placeholder="Address">
                                    </input>
                                </div>

                                <div className="ProfilePageAddress2">
                                    <div className="ProfilePageAddress2text">
                                        <p>Address</p>
                                    </div>
                                    <input className="ProfilePageAddress2_input" type="text" placeholder="Address">
                                    </input>
                                </div>

                                <div className="ProfilePageCardNum">
                                    <div className="ProfilePagePhoneText">
                                        <p>Phone Number</p>
                                    </div>
                                    <input className="ProfilePageCardNum_input" type="number" placeholder="+1 (123) 456-7890">
                                    </input>
                                </div>

                                <div className="DateBoxBill">
                                    <div className="ProfilePageCVVText">
                                        <p>CVV</p>
                                    </div>
                                    <div className="ProfilePageExDateText">
                                        <p>EXP. MONTH</p>
                                    </div>
                                    <div className="ProfilePageExYearText">
                                        <p>EXP. YEAR</p>
                                    </div>
                                    <div className="ProfilePageDayBill">
                                        <div>
                                            <input className="ProfilePageDay_input" type="text" placeholder="cvv" />
                                        </div>
                                    </div>
                                    <div className="ProfilePageMonthBill">
                                        <div>
                                            <input className="ProfilePageMonth_input" type="text" placeholder="Month" />
                                        </div>
                                    </div>
                                    <div className="ProfilePageYearCard">
                                        <div>
                                            <input className="ProfilePageYearCard_input" type="text" placeholder="Year" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="SubscriptionSection" activeTab={activeTab}>
                    <div className="MainFrameSub">
                        <div className="BoxSubsDet">
                            <div className="MessageSubTop">
                                <p style={{ color: "black", width: "100%", height: "22px" }}>
                                    Your Subscription
                                </p>
                            </div>

                            <div className="BoxSubsFree">
                                <div className="MessageSubFree">
                                    <p style={{ color: "black", width: "100%", height: "100%" }}>
                                        Your Subscription is free "add more details"
                                    </p>
                                </div>
                            </div>
                            <div className="BoxSubsPaid">
                                <div className="MessageSubPaid">
                                    <p style={{ color: "black", width: "100%", height: "100%" }}>
                                        Your Subscription is paid "add more details"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="AnalyticsSection" activeTab={activeTab}>
                    <div className="MainFrameAn">
                        <div className="BoxSubsDet">
                            <div className="MessageAnTop">
                                <p style={{ color: "black", width: "100%", height: "100%" }}>
                                    New feature coming soon!
                                </p>
                                <div className="MessageAnSub">
                                    <p style={{ color: "black", width: "100%", height: "100%" }}>
                                        This feature will allow you to see your analytics in more details
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="ThemeSection" activeTab={activeTab}>
                    <div className="MainFrameAn">
                        <div className="BoxSubsDet">
                            <div className="MessageAnTop">
                                <p style={{ color: "black", width: "100%", height: "100%" }}>
                                    New feature coming soon!
                                </p>
                                <div className="MessageAnSub">
                                    <p style={{ color: "black", width: "100%", height: "100%" }}>
                                        This feature will allow you to change the theme of the website to fit your style
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabContent>
            </div>

        </div>

    );
};


export default ProfileTabs;
