import React, { useState } from "react";
import { createUser } from '../graphql/mutations';
import { withAuthenticator, AmplifySignOut, TextField } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { v4 as uuid } from 'uuid';

const SignUp = () => {
    const [userData, setUserData] = useState({});
    const createDBEntry = async () => {
        const { email } = userData;
        const user = {
            id: uuid(),
            email,
            metadata: "",
            filePath: "",
            userFiles: "",
            journals: 0,
            isPayed: "NO"
        }
        await API.graphql(graphqlOperation(createUser, { input: user }));
    }

return (
    <div className="signup">
        <TextField 
            label="Email"
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
        <button onClick={createDBEntry}> Submit </button>
	</div>
);
};

export default SignUp;
