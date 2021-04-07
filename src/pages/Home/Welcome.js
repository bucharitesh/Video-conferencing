import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Video from "twilio-video";


import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { BsCameraVideoFill } from "react-icons/bs";

import { useCallback, useEffect, useState } from "react";


function Welcome() {
    const history = useHistory();
    const [code, setCode] = useState('');
    const [username, setUsername] = useState("");
  
    const { currentUser, room, setRoom, roomName, connecting, setConnecting } = useAppContext();
  
    useEffect(() => {
      if (currentUser) {
        setUsername(currentUser.email);
      }
    }, [currentUser]);
  
    const handleSubmit = useCallback(async () => {
      setConnecting(true);
    
      const data = await fetch("/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      Video.connect(data.token, {
        name: roomName,
      })
        .then((room) => {
          setConnecting(false);
          setRoom(room);
        })
        .catch((err) => {
          console.log(err);
          setConnecting(false);
        });
        history.push(`/${roomName}`);
    }, [roomName, username]);
  
    const handleLogout = useCallback(() => {
      setRoom((prevRoom) => {
        if (prevRoom) {
          prevRoom.localParticipant.tracks.forEach((trackPub) => {
            trackPub.track.stop();
          });
          prevRoom.disconnect();
        }
      });
    }, []);
  
    useEffect(() => {
      if (room) {
        const tidyUp = (event) => {
          if (event.persisted) {
            return;
          }
          if (room) {
            handleLogout();
          }
        };
  
        window.addEventListener("pagehide", tidyUp);
        window.addEventListener("beforeunload", tidyUp);
  
        return () => {
          window.removeEventListener("pagehide", tidyUp);
          window.removeEventListener("pagehide", tidyUp);
        };
      }
    }, [room, handleLogout]);

    const joinCall = () => {
        history.push(`/${code}`)
    }

    return (
        <Container>
            <Avatar src={currentUser.photoURL} />
            <Title size={32} weight='600'>
                Welcome back {currentUser.displayName}.
            </Title>
            <ConfBox>
                <Button textWeight='600' textColor='white' onClick={handleSubmit}>
                    <BsCameraVideoFill size='1.5em'/>
                    Create a Meeting
                </Button>
                <FormRoot>
                    <Input placeholder='Enter a Code or Link' value={code} onChange={(e) => setCode(e.target.value)}/>
                    <JoinButton textWeight='600' textColor='white' onClick={joinCall}>
                        Join
                    </JoinButton>
                </FormRoot>
            </ConfBox>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    padding: 0px 24px;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: center;
`;

const Title = styled(Text)`
    margin-top: 16px;
    text-transform: capitalize;
`;

const Avatar = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    margin-bottom: 16px;
`;

const FormRoot = styled.div`
    margin-top: 8px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    & button {
        margin-top: 16px;
    }
`;

const ConfBox = styled.div`
    margin-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

`;

const JoinButton = styled(Button)`
    margin-left: 15px;
`;

export default Welcome
