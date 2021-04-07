import styled from 'styled-components';
// import Text from '../../components/Text';

import BackgroundImg from '../../assets/bg.jpg';
// import Button from '../../components/Button';
// import Input from '../../components/Input';
// import { BsCameraVideoFill } from "react-icons/bs";

import { useAppContext } from "../../context/appContext";

import Login from './Login';
import Welcome from './Welcome';

function Home() {
    const { appState } = useAppContext();

    return (
        <Root>
            <Overlay />
            <Header>
            {/* LOGO */}
            </Header>
            {appState === "login" && <Login />}
            {appState === "home" && <Welcome />}
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex: 1;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colorUtils.fade(theme.color.background, 0.92)};
`;

const Header = styled.div`
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 24px 40px 24px;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;


export default Home
