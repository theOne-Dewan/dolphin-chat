import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';

const ChatInput = ({channelId, channelName, chatRef}) => {
    const [input, setInput] = useState('');
    
    const sendMessage = e => {
        e.preventDefault();
        console.log(input)
        if (!channelId){
            return false;
        }

        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Dewan',
            userImage: 'https://i.guim.co.uk/img/media/4317f7a56f8ca0ea10b7e3935f409da741631d4d/0_19_958_575/master/958.png?width=620&quality=45&auto=format&fit=max&dpr=2&s=c71bc89271ce6b05b29934b30cf2f578'
        });

        chatRef?.current?.scrollIntoView({behavior: 'smooth'});
        
        setInput('');
    };

    const handleChange = e => setInput(e.target.value);
    
    return (
        <ChatInputContainer>
            <form>
                <input value={input} placeholder={`Message #${channelName}`} onChange={handleChange}></input>
                <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button{
        display: none !important;
    }
`;
