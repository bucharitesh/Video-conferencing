import styled from 'styled-components';

function ActionButton({ color, enabled, icon: Icon, onClick, showBadge, size }) {
    return (
        <Root enabled={enabled} size={size} onClick={onClick}>
            <Icon color={color} size={size / 2} />
            {showBadge ? <Badge /> : null}
        </Root>
    )
}

// Components //
const Root = styled.div`
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.slate};
    cursor: pointer;
    user-select: none;
    transition: 200ms ease-out;

    & + & {
        margin-left: 16px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colorUtils.lighten(theme.color.slate, 0.1)};
    }
`;

const Badge = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.red};
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
`;

export default ActionButton
