import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_i7oam199c',
    ClientId: '2ljt7tj11nneqtn2o4n92r905s'
};

export default new CognitoUserPool(poolData);