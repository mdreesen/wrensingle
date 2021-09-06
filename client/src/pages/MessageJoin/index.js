import React from 'react';

// Import Navbar
import NavbarUser from '../../components/NavbarUser';
import Join from '../../components/MessageJoin';
// import Chat from '../../components/MessageChat';

const MessageJoin = () => {
    return (
        <div>
            <NavbarUser/>
            <div>Here is the Communication page</div>
            <Join />
        </div>
    );
}

export default MessageJoin;