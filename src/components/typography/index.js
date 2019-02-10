import styled, { css } from 'styled-components';

const handleSizing = (size) => {
  switch (size) {
    case 'base': return '16px';
    case 'big': return '24px';
    case 'H2': return '36px';
    case 'paragraph': return '18px';
    default: return '14px';
  }
}

const text = css`
  color: ${props => props.color || 'black'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => handleSizing(props.size)}
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  ${text}
`;

export const Paragraph = styled.p`
  ${text}
`;
