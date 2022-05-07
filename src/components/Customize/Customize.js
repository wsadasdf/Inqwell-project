import React from "react";
import useCollapse from 'react-collapsed';
import style from '../../css/customize.css';

function Customize() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="customize-menu-container">
        <div className="header" {...getToggleProps()}>
        <div className="customize-container">
        <div className="customize">Customize</div>
            <div className="customize-icon-container">
                <i className="fa fa-solid fa-pencil"></i>
            </div>
        </div>
                {isExpanded ? <i className="fa fa-solid fa-pencil"></i> : ''}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <div className="exit-icon">
                    <div className="ei12_8312_2_3081"></div>
                    <div className="ei12_8312_2_3082"></div>
                    </div><span  className="customize-heading">Customize Settings</span><span  className="page-color-heading">Theme Page Color’s</span><span  className="heading-heading">Heading</span>
                    <div className="page-color-1"></div>
                    <div className="page-color-2"></div>
                    <div className="page-color-3"></div>
                    <div className="page-color-4"></div><span  className="edit-container-1">Edit</span>
                    <div className="edit-icon-container">
                    <div className="ei12_8321_2_3069"></div>
                    </div><span  className="edit-container-2">Edit</span>
                    <div className="e12_8323">
                    <div className="ei12_8323_2_3069"></div>
                    </div><span  className="e12_8324">Tags</span>
                    <div className="e12_8545">
                    <div className="e12_8326">
                        <div className="ei12_8326_2_801"></div>
                        <div className="ei12_8326_2_802"></div>
                    </div><span  className="e12_8325">Add Tags</span>
                    </div>
                    <div className="headings-container">
                    <div className="heading-1">option 1</div>
                    <div className="heading-2"></div>
                    <div className="heading-3"></div>
                    <div className="heading-4"></div>
                    <div className="heading-5"></div>
                    <div className="heading-6"></div>
                    <div className="e12_8340"></div>
                    <div className="e12_8341"></div>
                    <div className="e12_8342"></div><span  className="e12_8343">Calorie 
                Intake</span><span  className="e12_8344">Food Habits</span><span  className="e12_8345">Inspiration</span>
                    </div>
                    <div className="e12_8346">
                    <div className="e12_8347"></div><span  className="e12_8348">Inner Peace</span>
                    </div>
            </div>
        </div>
        
    </div>
    );
}

export default Customize;