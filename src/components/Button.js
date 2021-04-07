import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Root = styled.button`
    border: 0;
    background-color: ${({ theme }) => theme.color.purple};
    background-image: ${({ theme }) => theme.color.gradient};
    border-radius: 8px;
    box-shadow: 0px 4px 24px ${({ theme }) => theme.colorUtils.fade(theme.color.purple, 0.4)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    background-size: 150% auto;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
      }

    p {
        display: flex;
    }

    svg {
        margin-right: 8px;
    }
`;

function Button({ className, children, onClick, textColor, textWeight }) {
    return (
        <Root className={className} onClick={onClick}>
            <Text weight={textWeight} color={textColor} size={16}>
                {children}
            </Text>
        </Root>
    )
}

export default Button;