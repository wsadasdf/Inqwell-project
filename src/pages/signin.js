import React from "react";
import '../css/Signin.css';
import * as FaIcons from "react-icons/fa";

const SignIn = () => {
	function myFunction() {
		var x = document.getElementById("myInput");
		if (x.type === "password") {
			x.type = "text";
			
		} else {
			x.type = "password";
		}
	}
	return (
		<div className="PopUpShadow">
			<div className="SigninPopUP">
				<div className="closingIcon">
					<a href="./index"><FaIcons.FaTimes style={{ color: "black", width: "22px", height: "22px" }} /></a>
				</div>
				<div className="WelcomeMessage">
					<p>Welcome Back!</p>
				</div>
				<div className="SigninSgin">
					<p>Sign in</p>
				</div>
				<div className="InfoInputEmail">
					<div>
						<input className="InfoInputEmail_input" type="text" required="required" placeholder="User Email">
						</input>
					</div>
				</div>
				<div className="InfoInputPassword">
					<div>
						<input className="InfoInputPassword_input" type="password" required="required" placeholder="Password" id="myInput" />
						<button className="Eyes" onClick={myFunction}>
						<FaIcons.FaEye style={{ color: "black", width: "22px", height: "22px" }} />
							</button> 
					</div>
				</div>
				<a href="./profile">
					<div class="SignInButton"> </div>
					<div class="SignInButton_"> <span class="SignInButton_Text">Sign in</span> </div>
				</a>
			</div>
		</div>
	);
};
export default SignIn;
