import React from 'react';
import { ChatEngine } from "react-chat-engine";
import NavbarCustom from '../navbar/Navbar';
const Chat = () => {
    return (
        <>
        <NavbarCustom/>
           <ChatEngine
            projectID="4031ffd2-1596-4f7f-9fb3-523f1c8b7189"
            userName="User"
            userSecret="User"
          />
        </>
    );
};

export default Chat;