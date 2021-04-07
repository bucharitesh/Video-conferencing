import React, { forwardRef } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

function Text({ color, faded, fontFamily, lineHeight, paragraph, size, weight, children}) {
    return (
        <AnimatedText 
        color={color} 
        faded={faded} 
        weight={weight} 
        fontFamily={fontFamily} 
        paragraph={paragraph} 
        lineHeight={lineHeight}
        size={size}>
            {children}
        </AnimatedText>
    )
}

const AnimatedText = styled.p`
    color: ${({ color, theme }) => theme.color[color]};
    font-weight: ${({ weight }) => weight};
    font-family: ${({ fontFamily }) => fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    font-size: ${({ size }) => size}px;
    opacity: ${({ faded }) => (faded ? 0.5 : 1)};
    line-height: ${({ lineHeight, size, paragraph }) => lineHeight || size + 10}px;
`;


export default Text
