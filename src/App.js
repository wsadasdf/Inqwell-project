import React, { useState } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify'; //will be used later 
import awsExports from './aws-exports';//might be of use for security team.
// import { useState, useEffect } from 'react'
// import Header from './Header';
import awsconfig from './aws-exports';
import './App.css';
import Sidebar from "./components/NavBars/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/index";
import { CreateJournal, CreateJournalCustoms, CreateJournalEntry, CreateJournalEntryPage} from "./pages/create";
import PersonalFont from "./pages/personalfont";
import Profile from "./pages/profile";
import SignUp from './pages/signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/signin';
import { createUser } from './graphql/mutations';

Amplify.configure(awsconfig);
function App() {
    
    const [userData, setUserData] = useState({});
return (
	<div className="App">
	<Router>
	<Sidebar />
	<Routes>
		<Route path="/index" exact element={<Home/>} />
		<Route path="/create/createjournal" element={<CreateJournal/>} />
		<Route path="/create/createjournalentry"  element={<CreateJournalEntry/>} />
        <Route path="/create/createjournalentrypage"  element={<CreateJournalEntryPage/>} />
		<Route path="/create/createjournalcustoms"  element={<CreateJournalCustoms/>} />
		<Route path="/personalfont"  element={<PersonalFont/>} />
		<Route path="/profile"  element={<Profile/>} />
		<Route path="/signup"  element={<SignUp/>} />
		<Route path="/signin"  element={<SignIn/>} />
	</Routes>
	</Router>
	</div>

);
}

export default withAuthenticator (App);
