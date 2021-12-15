import React from 'react';
import styled from 'styled-components';
import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, FileCopy, PeopleAlt, Apps, ExpandLess, ExpandMore, Add } from '@material-ui/icons';
import SidebarOptions from './sidebar-options';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('channels'));
    
    
    return (
        <SidebarContainer >
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Channel</h2>
                    <h3>
                        <FiberManualRecord/>
                        Name
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
            
            {channels?.docs.map((doc) => (
                <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
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
    
    > h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

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
