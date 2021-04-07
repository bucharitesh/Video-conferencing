import styled from 'styled-components';

import {
    ChatIcon,
    CloseIcon,
    HangUpIcon,
    MicOffIcon,
    MicOnIcon,
    VideoOffIcon,
    VideoOnIcon,
    PeopleIcon,
    SettingsIcon,
    ShareScreenIcon,
    ShareScreenOffIcon,
} from '../../../../components/Icons';
import ActionButton from './ActionButton';

function ActionsButton({attendeesChatOpened,
    attendeesListOpened,
    attendeesSettingsOpened,
    isMuted,
    isScreenshare,
    endCall,
    toggleAttendeesChat,
    toggleAttendeesList,
    toggleMicrophone,
    toggleScreenShare,
    videoEnabled,
    unreadCount,
    handleAudio,
    handleVideo,
    toggleSettings
    }) {
    return (
        <Root>
            <Actions>
                <ActionButton
                    icon={attendeesSettingsOpened ? CloseIcon : SettingsIcon}
                    onClick={toggleSettings}
                    size={40}
                />
                <ActionButton
                    icon={isScreenshare ? ShareScreenOffIcon : ShareScreenIcon}
                    onClick={toggleScreenShare}
                    size={40}
                />
            </Actions>
            <MainControls>
                <ActionButton icon={isMuted ? MicOffIcon : MicOnIcon} onClick={handleAudio} size={40} />
                <ActionButton size={60} color='red' icon={HangUpIcon} onClick={endCall} />
                <ActionButton
                    enabled={videoEnabled}
                    icon={videoEnabled ? VideoOnIcon : VideoOffIcon}
                    onClick={handleVideo}
                    size={40}
                />
            </MainControls>
            <Actions>
                <ActionButton
                    icon={attendeesListOpened ? CloseIcon : PeopleIcon}
                    onClick={toggleAttendeesList}
                    size={40}
                />
                <ActionButton
                    showBadge={unreadCount > 0}
                    icon={attendeesChatOpened ? CloseIcon : ChatIcon}
                    onClick={toggleAttendeesChat}
                    size={40}
                />
            </Actions>
        </Root>
    )
}

const Root = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    padding: 12px 36px;
    margin-right: ${({ sidebarOpen }) => (sidebarOpen ? 376 : 0)}px;
    transition: margin-right 250ms;
`;

const MainControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    & > * + * {
        margin-left: 16px;
    }
`;

export default ActionsButton
