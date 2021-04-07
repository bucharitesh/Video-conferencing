import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import firebase, { auth } from "../../firebaseConfig";

function Login() {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

    return (
        <Container>
            <Title size={46} weight='600'>
                Welcome.
            </Title>
            <Text size={16}>Login With Google to Join a Meet or create one :)</Text>
            <CallBtn textColor='white' textWeight='600' onClick={SignInWithGoogle}>Login with google</CallBtn>
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

const CallBtn = styled(Button)`
    margin-top: 32px;
`;

export default Login
