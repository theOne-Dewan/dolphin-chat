import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, FileCopy, PeopleAlt, Apps, ExpandLess, ExpandMore, Add } from '@material-ui/icons';
import SidebarOptions from './sidebar-options';
import { db, auth } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
    const [channels] = useCollection(db.collection('channels'));
    const [user] = useAuthState(auth);
    
    
    return (
        <SidebarContainer >
            <SidebarHeader>
                <SidebarInfo>
                    <SidebarAvatar src={user?.photoURL} alt={user?.displayName}/>
                    <h3>
                        <FiberManualRecord/>
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>

            <SidebarOptions Icon={InsertComment} title='Threads'/>
            <SidebarOptions Icon={Inbox} title='Mentions & Reactions'/>
            <SidebarOptions Icon={Drafts} title='Saved Items'/>
            <SidebarOptions Icon={BookmarkBorder} title='Channel Browser'/>
            <SidebarOptions Icon={PeopleAlt} title='People & User-Groups'/>
            <SidebarOptions Icon={Apps} title='Apps'/>
            <SidebarOptions Icon={FileCopy} title='File Browser'/>
            <SidebarOptions Icon={ExpandLess} title='Show Less'/>
            <hr/>
            <SidebarOptions Icon={ExpandMore} title='Channels'/>
            <hr/>
            <SidebarOptions Icon={Add} addChannelOption title='Add Channel'/>
            <div className='channels-container'>
                {channels?.docs.map((doc) => (
                <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
                ))}
            </div>
            
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    flex: 0.3;
    color: white;
    background-color: var(--slack-color);
    border-top: 1px solid #49274b;
    margin-top: 60px;
    max-width: 260px;

    > hr{
        border: 1px solid #49274b;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    > .channels-container{
        overflow: auto;
        height: 100px;

        ::-webkit-scrollbar {
            width: 20px;
          }
        
          ::-webkit-scrollbar-thumb {
            background-color: rgb(129, 68, 133);
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
          }
        
          ::-webkit-scrollbar-thumb:hover {
            background-color: rgb(166, 87, 171);
          }
        
          ::-webkit-scrollbar-track {
            background-color: #421f44;
            width: 5px;
          }
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

const SidebarAvatar = styled(Avatar)`
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 5px;
    
    :hover{
        opacity: 0.8;
    }
`;