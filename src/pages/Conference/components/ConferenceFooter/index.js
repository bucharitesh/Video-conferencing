import styled from 'styled-components';
import ActionsButton from './ActionsButton';

function ConferenceFooter({toggleSettings, endCall, handleScreen, handleVideo, handleAudio}) {
    return (
        <FooterBar>
            <ActionsButton 
                endCall={endCall}
                handleAudio={handleAudio}
                handleVideo={handleVideo}
                handleScreen={handleScreen}
                toggleSettings={toggleSettings}
            />
        </FooterBar>
    )
}

const FooterBar = styled.div`
    position: absolute;
    bottom: 0px;
    transform: translate(-50%, -50%);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 50;
    /*-webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;*/
    opacity: 1;
    width: 100%;
    border-top: 2px solid #3E44FE;
    background-color: #13141C;
    text-align: center;
`;

export default ConferenceFooter
