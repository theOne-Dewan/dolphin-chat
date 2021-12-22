import React from 'react';
import styled from 'styled-components';
import { AccessTimeOutlined, Search, HelpOutline } from '@material-ui/icons';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src='https://live.staticflickr.com/65535/51761848837_ea6afee3e3_m.jpg' alt='Logo'/>
                <AccessTimeOutlined/>
            </HeaderLeft>
            <HeaderSearch>
                <Search/>
                <input placeholder='Search Sonar'/>
            </HeaderSearch>
            <HeaderRight>
                <p onClick={() => auth.signOut()}>Logout</p>
                <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items:center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    height: 40px;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 10px;

    > img{
        width: 120px;
        height: 35px;
        margin-top: 10px
    }

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
        cursor: pointer;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input{
        background-color: transparent;
        text-align: center;
        border: none;
        min-width: 30vw;
        color: white;
        outline: 0;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > p{
        margin-left: 75%;
        margin-bottom: 2px;
        cursor: pointer;

        :hover{
            opacity: 0.7;
        }
    }

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;
