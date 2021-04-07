import styled from 'styled-components';
import { forwardRef } from 'react';

const Root = styled.input`
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    padding: 20px;
    color: white;
    margin: 16px 0px;
    background-color: ${({ theme }) => theme.colorUtils.fade(theme.color.white, 0.08)};

    &::placeholder {
        color: #ffffff;
    }

    &:focus {
        background-color: ${({ theme }) => theme.colorUtils.fade(theme.color.white, 0.16)};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colorUtils.fade(theme.color.white, 0.16)};
    }
`;

const Input = forwardRef(({ field, ...props }, ref) => <Root ref={ref} {...field} {...props} />);

export default Input;

