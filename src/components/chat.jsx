import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectChannelId } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './chat-input';
import Message from './message';

function Chat() {
    const channelId = useSelector(selectChannelId);

    const chatRef = useRef();

    const [channelDetails] = useDocument(channelId && db.collection('channels').doc(channelId));

    const [channelMessages, loading] = useCollection(channelId && db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc'));

    useEffect(() => {
        chatRef?.current?.scrollIntoView({behavior: 'smooth'});
    }, [channelId, loading])

    return (
        <ChatContainer>
            {channelDetails && channelMessages && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{channelDetails?.data().name}</strong></h4>
                        <StarBorderOutlined/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlined/> Details
                        </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {channelMessages?.docs.map(doc => {
                        const {message, timestamp, user, userImage} = doc.data();
    
                        return(
                            <Message key={doc.id} message={message} timestamp={timestamp} user={user} userImage={userImage}/>
                        );
                    })};
    
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>
                <ChatInput chatRef={chatRef} channelId={channelId} channelName={channelDetails?.data().name}/>
                </>
            )}
        </ChatContainer>
    )
}

export default Chat;

const ChatContainer= styled.div`
    flex: 0.7;
    flex-grow:1;
    overflow-y: scroll;
    margin-top: 60px;

    ::-webkit-scrollbar {
        width: 20px;
      }
    
      ::-webkit-scrollbar-thumb {
        background-color: #421f44;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgb(129, 68, 133);
      }
    
      ::-webkit-scrollbar-track {
        background-color: white;
        width: 5px;
      }
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

`;

const ChatBottom= styled.div`
    padding-bottom: 200px;
`;


