import React from "react";
import { GoogleLogin } from "react-google-login";
import "./signup.css";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

function Login(props) {
  const history = useHistory();

  const checkUser = (response) => {
    let email = response.profileObj.email;
    // console.log(response.profileObj);
    //check to see if user exists in database
    API.findByEmail(email)
      .then((res) => {
        if (res.data !== null) {
          console.log(res.data);
          props.userInfo(res.data);
          history.push("/dash");
          // console.log("User exists!")
        } else {
          alert("please create an account");
        }
      })
      .catch((err) => console.log(err));
  };

  const failedLogin = () => {
    alert("Something went wrong, try again.");
  };

  return (
    <>
      <div class="grid-x">
        <div />
        <div class="signupcontainer">
          <div id="loginHere" class="sign-up-form radius bordered shadow">
            <span class="sign-up-text">
              <h4 class="text-center signupHeading">Login here</h4>
              <div class="sign-up-googleBtn">
                <GoogleLogin
                  clientId="277440639024-khmlcdp27npa3bdmj3fmd2i6r1ptq54v.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={checkUser}
                  isSignedIn={false}
                  onFailure={failedLogin}
                  cookiePolicy={"single_host_origin"}
                  scope="https://www.googleapis.com/auth/calendar.events"
                  redirectUri="http://localhost:3000/dash"
                  uxMode="redirect"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
