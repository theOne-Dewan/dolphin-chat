import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectChannelId } from '../features/appSlice';

function Chat() {
    const channelId = useSelector(selectChannelId);
    
    return (
        <ChatContainer>
            <>
            <Header>
                <HeaderLeft>
                    <h4><strong>#RoomName</strong></h4>
                    <StarBorderOutlined/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>

            </ChatMessages>
            
            </>
        </ChatContainer>
    )
}

export default Chat;

const ChatContainer= styled.div`
    flex: 0.7;
    flex-grow:1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const Header= styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft= styled.div`
    display: flex;
    align-items: center;

    > h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root{
        margin-left: 20px;
        font-size: 18px;
    }
`;

const HeaderRight= styled.div`
    > p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root{
        margin-right: 5px;
        font-size: 16px;
    }
`;

const ChatMessages= styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;


