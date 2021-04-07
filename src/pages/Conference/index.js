import styled from 'styled-components';
import ConferenceHeader from './components/ConferenceHeader';
import ConferenceFooter from './components/ConferenceFooter';
import MeetingInfo from './components/MeetingInfo';
import Participant from './components/Participant';
import MessengerPeople from './components/MessengerPeople';

import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from 'react';


function Conference({room}) {

    const isAdmin = window.location.hash === "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    const [meetInfoPopup, setMeetInfoPopup] = useState(true);

    const closeModal = () => {
        setMeetInfoPopup(false)
    }

    const toggleSettings = () => {
        if (meetInfoPopup == false){
            setMeetInfoPopup(true)
        } else
        setMeetInfoPopup(false)
    }

    return (
        <>
            <ConferenceHeader />
            {isAdmin && meetInfoPopup && <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} closeModal={closeModal} url={url} />}
            <ConferenceFooter
                toggleSettings={toggleSettings}
            />
            <MessengerPeople />
        </>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;

const Header = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    padding: 24px;
    z-index: 101;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
        display: flex;
    }
`;

const VideoBox = styled.div`
  height: calc(100% - 150px);
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Conference
