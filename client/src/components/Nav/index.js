import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";
import UserContext from "../../utils/UserContext";

const Toggle = styled.button`
    cursor: pointer;
    height: 40px;
    width: 50px;
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
    height: 40px;
    width: 50px;
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
    height: 40px;
    width: 50px;
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
    localStorage.clear() //clears local storage and resets user state to empty
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
      if (color === props.theme) {
        currentIndex = index;
      }
    })

    if (currentIndex + 1 < props.colorThemeArray.length) {
      props.test(props.colorThemeArray[currentIndex + 1])
    } else {
      props.test(props.colorThemeArray[0])
    }

  }

  function changeFontTheme() {
    let currentIndex = 0;

    props.fontThemeArray.forEach((font, index) => {
      if (font === props.fontTheme) {
        currentIndex = index;
      }
    })

    if (currentIndex + 1 < props.fontThemeArray.length) {
      props.test1(props.fontThemeArray[currentIndex + 1])
    } else {
      props.test1(props.fontThemeArray[0])
    }

  }

  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  //const Blueicon = props.theme === "blue" ? <HiMoon size={40} /> : <CgSun size={40} />;

  //today's date
  const today = new Date()

  //quote state
  const [quote, setQuote] = useState({
    quote: "",
    author: ""
  });

  //axios call for insprirational quote
  useEffect(() => {
    API.quote().then((res) => {
    
      const qod = res.data.content
      const auth = res.data.author
      // console.log(res);
      setQuote({...quote, quote: qod, author: auth})
    }).catch((err) => {
      console.error(err);
    });
  }, [])

  return (
    <>

    <div className="grid-x grid-y">
      <div id="myHeaderDiv" className="header cell radius width-100">
        <h1 className="Username">Hello {user.givenName}!</h1>
        <p className="Username date">{today.toDateString()}</p>
        <br />
        <p class="happyQuote">"{quote.quote}"</p>
        <p class="happyQuote author">- {quote.author}</p>
        <div className=" align-right">
          <GoogleLogout
          clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={redirect}
          onFailure={failedLogout}
          className="LogoutBTN align-self-top small-4"
        ></GoogleLogout>
        
        <div className="dropdown button">
          <span> Choose Your Theme</span>
          <div className="dropdown-content">
            <Toggle onClick={changeTheme}>
              {icon}
            </Toggle>
            <ColorToggle onClick={changeColorTheme}>
              Color
            </ColorToggle>
            <FontToggle onClick={changeFontTheme}>
              Font
            </FontToggle>
          </div>
        </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Nav;