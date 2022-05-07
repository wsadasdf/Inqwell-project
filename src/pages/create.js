import React, { useState, Component } from "react";
import JournalTabs from "../components/TabComponent/JournalTabs";
import JournalCustomTabs from "../components/TabComponent/JournalCustomTabs";
import '../App.css';
import '../css/createjournal.css';
import '../css/createjournalentry.css';
import '../css/createjournalentrypage.css';
import '../css/customize.css';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";
import Inqwell from '../images/Inqwell.png';
import Futuristic from '../images/Futuristic.png';
import ColorPop from '../images/ColorPop.png';
import DeweySpring from '../images/DeweySpring.png';
import FantasticalJourney from '../images/FantasticalJourney.png';
import Moonlight from '../images/Moonlight.png';
import PsychedlicArt from '../images/PsychedlicArt.png';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'draft-js/dist/Draft.css';
import { propTypes } from "prop-types";
import { RichUtils } from "draft-js";
import Customize from "../components/Customize/Customize";
import { withAuthenticator, AmplifySignOut, TextField } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import {listUsers} from '../graphql/queries';
import { updateUser } from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: #333333
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #BBD8E5;
      }
    &:visited{
        color: #333333;
    }
`;

export const CreateJournal = () => {

 

return (
	<div className="createjournal">
		<h1 className="page-title">Create a New Journal</h1>
		<div className="createjournal-container">
			<div className="journal-visual">
				<div className="journal-visual-binding"></div>
				<input className="journal-visual-title-box" type="text" name="journal_title" required="required" placeholder="Enter journal title"></input>
			</div>

			<div className="journal-customs-container">
					<div className="create-journal-title">
						<p>Themes</p>
						<FaIcons.FaEdit style={{width: "18px", height:"18px"}} />
					</div>
					<div className="journal-customs-theme-container">
						<CustomLink to="/create/createjournalcustoms">
						<div className="theme-1">
							<div className="custom-theme-box"><FaIcons.FaPlus style={{width: "18px", height:"18px", marginTop: "25px"}}/></div>
							<p>Custom Theme</p>
						</div>
						</CustomLink>
						<div className="theme-2">
							<div className="theme-box">
								<img src={Inqwell} alt="Inqwell Theme"/>
							</div>
							<p>Inqwell</p>
						</div>
						<div className="theme-3">
							<div className="theme-box">
								<img src={Futuristic} alt="Futuristic Theme"/>
							</div>
							<p>Futuristic</p>
						</div>
						<div className="theme-4">
							<div className="theme-box">
								<img src={ColorPop} alt="Color Pop Theme"/>
							</div>
							<p>Color Pop</p>
						</div>
						<div className="theme-5">
							<div className="theme-box">
								<img src={DeweySpring} alt="Dewey Spring Theme"/>
							</div>
							<p>Dewey Spring</p>
						</div>
						<div className="theme-6">
							<div className="theme-box">
								<img src={FantasticalJourney} alt="Fantastical Journey Theme"/>
							</div>
							<p>Fantastical Journey</p>
						</div>
						<div className="theme-7">
							<div className="theme-box">
								<img src={Moonlight} alt="Moonlight Theme"/>
							</div>
							<p>Moonlight</p>
						</div>
						<div className="theme-8">
							<div className="theme-box">
								<img src={PsychedlicArt} alt="Psychedlic Art Theme"/>
							</div>
							<p>Psychedlic Art</p>
						</div>
						</div>
						<div className="create-journal-title">
							<p>Add Image</p>
							<FaIcons.FaPlus style={{width: "18px", height:"18px"}}/>
						</div>
					</div>
			</div>
		{/* <JournalTabs/> */}
	</div>
);
};

export const CreateJournalCustoms = () => {
return (
	<div className="createjournalcustoms">
		<h1 className="page-title">Create a Custom Theme</h1>
        <div className="createjournalcustoms-container"> 
		<div className="journal-visual">
			<div className="journal-visual-binding"></div>
			<input className="journal-visual-title-box" type="text" name="journal_title" required="required" placeholder="Enter journal title"></input>
		</div>
		<JournalCustomTabs/>
		</div>
	</div>
);
};

export const CreateJournalEntry = () => {
  return (
    <div className="createjournalentry">
      <span class="choose-notebook">Choose a Notebook</span>
      <div className="journals-container">
        <div className="journal-one">
          <div className="journal-one-shape"></div>
          <div className="journal-one-spine"></div>
          <span className="journal-one-title">Self-Reflective Journal</span>
          <Link to="/create/createjournalentrypage">
            <button className="new-entry">Create New Entry</button>
          </Link>
        </div>
        <div className="new-journal">
          <Link to="/create/createjournal">
            <button className="circle">
              <i className="fa fa-regular fa-plus"></i>
            </button>
          </Link>
          <span className="new-journal-title">Create New Notebook</span>
        </div>
      </div>
    </div>
  );
};

/*


	TEXT EDITOR IMPLEMENTATION
	CreateJournalEntryPage


	NOTES:
	- Draft.js contains its own heading and text manipulation features


	User types in this text editor


*/

// Voice Recording Button in Toolbar
class voiceRecording extends Component {

  

}

// Webcam Recording Button in Toolbar
class webcamRecording extends Component {
  
}

export const CreateJournalEntryPage = () => {

  // Const for the state of the text editor
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
    
    const createRaw = () => {
        const raw = convertToRaw(editorState.getCurrentContent());
    }
   

    const saveToDB = async () => {
        try {

            const raw = convertToRaw(editorState.getCurrentContent());
            const rawJSON = JSON.stringify(raw);
            const dbList = await API.graphql(graphqlOperation(listUsers));
            const list = dbList.data.listUsers.items
            list[0].filePath = rawJSON;
            console.log(rawJSON);
            delete list[0].createdAt; //following deletes because graphql automatically adds them
            delete list[0].updatedAt;
            delete list[0].owner;
            await API.graphql(graphqlOperation(updateUser, { input: list[0] }));
            //console.log(list[0].filePath);
        } catch (error) {
            console.log("error saving to DB, ", error)
        }
    }
        const loadFromDB = async () => {
            try {
                const dbList = await API.graphql(graphqlOperation(listUsers));
                const list = dbList.data.listUsers.items;
                const item = list[0].filePath;
                console.log(list[0].filePath);
                const temp = JSON.parse(item)
                const obj = convertFromRaw(temp);
               
                console.log("this sucks");
                //const readyState = editorState.createWithContent(obj);
                //setEditorState(readyState)
                setEditorState(EditorState.createWithContent(obj));

            } catch (error) {
                console.log("error loading from DB," , error)
              }
        }

        

        //console.log("database:", list);
    
  return (

    <div className="createjournalentrypage">
      <div className="background">
        <div className="page">
          {/* Implementation of the text editor is inside this div  */}

          <div className="App">
                      <button className="default" onClick={loadFromDB}> Load </button>
                      <button className="default" onClick={saveToDB}> Save </button>
			{/* Text Editor Component */}
        <Editor 
                editorState={editorState}
                onChange={createRaw}
				onEditorStateChange={setEditorState}
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
        toolbarCustomButtons={[<voiceRecording />, <webcamRecording/>]}
        // toolbar={{
        //   options: ['emoji']
        // }}
			/>

          </div>
        </div>
      </div>
      <div className="top-menu">
        {/* <div className="customize-container">
				<div className="customize">Customize</div>
					<div className="customize-icon-container">
						<i className="fa fa-solid fa-pencil"></i>
					</div>
			</div> */}
        <Customize />
        <ul id="top_menu">
          <li>
            <a href="#">File</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Edit</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">View</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Insert</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Format</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Tools</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Add-Ons</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Help</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
