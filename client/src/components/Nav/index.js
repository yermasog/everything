import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";
import UserContext from "../../utils/UserContext";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const ColorToggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const FontToggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    font: ${props => props.theme.fontFamily};
    transition: all .5s ease;
`;

function Nav(props) {
  //access to userState
  const user = useContext(UserContext)

  const failedLogout = () => {
    alert("Something went wrong, try again.")
  }

  //redirect to login page after logout
  const history = useHistory();
  const redirect = () => {
    history.push("/")
    //logout from google automatically sets the userState to empty and loggedin to false
  }

  function changeTheme() {
    if (props.theme === "light") {
      props.test("dark");
    } else {
      props.test("light");
    }
  }

  function changeColorTheme() {
    let currentIndex = 0;

    props.colorThemeArray.forEach((color, index) => {
      if(color === props.theme) {
        currentIndex = index;
      }
    })

    if(currentIndex+1 < props.colorThemeArray.length) {
      props.test(props.colorThemeArray[currentIndex+1])
    } else {
      props.test(props.colorThemeArray[0])
    }

  }

  function changeFontTheme() {
    let currentIndex = 0;

    props.fontThemeArray.forEach((font, index) => {
      if(font === props.fontTheme) {
        currentIndex = index;
      }
    })

    if(currentIndex+1 < props.fontThemeArray.length) {
      props.test1(props.fontThemeArray[currentIndex+1])
    } else {
      props.test1(props.fontThemeArray[0])
    }

  }

  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  //const Blueicon = props.theme === "blue" ? <HiMoon size={40} /> : <CgSun size={40} />;

  //today's date
  const today = new Date()

  //quote state
  const [quote, setQuote] = useState();

  //axios call for insprirational quote
  useEffect(() => {
    API
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div className="grid-x">
      <div className="header cell radius">
        <h1 className="Username">Hello {user.firstName}!</h1>
        <p className="Username">Today is {today.toDateString()}</p>
        <h3>inspirational quote</h3>
        <GoogleLogout
          clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={redirect}
          onFailure={failedLogout}
          className = "LogoutBTN"
        ></GoogleLogout>
        <div className= "DarkBTN">
        <Toggle onClick={changeTheme}>
                {icon}
              </Toggle>
        <ColorToggle  onClick={changeColorTheme}>
                Color
            </ColorToggle>   
       <FontToggle  onClick={changeFontTheme}>
                Font
            </FontToggle>   
        </div>
      
        </div>
    </div>
  )
}

export default Nav;