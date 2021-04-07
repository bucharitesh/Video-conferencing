import styled from 'styled-components';

import { CopyIcon, PeopleIcon, CloseIcon } from '../../../../components/Icons';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import Input from '../../../../components/Input';

import {createRef, useState} from 'react';

function MeetingInfo({url, addPeople, closeModal}) {

    const input = createRef();

    const [copied, hasCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(url);
        hasCopied(true);
    };

    return (
        <Root>
            <Header>
                <h3>Your meeting's ready</h3>
                <Btn onClick={closeModal}>
                    <CloseIcon color='white' size={24}/>
                </Btn>
            </Header>
            {/* <AddUserButton textColor="white" onClick={addPeople}>
                <PeopleIcon color='white' size={24}/>
                Add Others
            </AddUserButton> */}
            <InputWrapper>
                <Input ref={input} readOnly value={url} />
                <IconButton onClick={handleCopyClick}>
                    <CopyIcon color='white' size={24} />
                </IconButton>
            </InputWrapper>
            <Notify>{copied ? 'Copied to clipboard!' : ''}</Notify>
            <UserInfo>
                Joined as bucharitesh@gmail.com
            </UserInfo>
        </Root>
    )
}


const IconButton = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & input {
        width: 248px;
    }

    & > ${IconButton} {
        margin-left: 16px;
    }
`;

const Root = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    padding: 25px;
    width: 380px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.08);
`;

const Header = styled.div`
    display: flex;
    
    justify-content: space-between;

    h3 {
        margin:0;
        font-size: 18px;
        font-weight: 400;
    }

`;

const Btn = styled.div`
    margin-top: 2px;
    cursor: pointer;
`;

const AddUserButton = styled(Button)`
    margin-top: 18px;
    cursor: pointer;
`;

const Notify = styled(Text)`
    height: 16px;
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.color.purple};
`;

const UserInfo = styled.div`

`;



export default MeetingInfo
