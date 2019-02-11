import styled, { css } from 'styled-components';

const handleSizing = (size) => {
  switch (size) {
    case 'base': return '16px';
    case 'big': return '24px';
    case 'H2': return '36px';
    case 'H1': return '48px';
    case 'title': return '60px';
    case 'paragraph': return '18px';
    default: return '14px';
  }
}

const handleWeight = (weight) => {
  switch (weight) {
    case 'bold': return 'bold';
    case 'thin': return '100';
    default: return 'normal';
  }
}

const text = css`
  color: ${props => props.color || 'black'};
  font-weight: ${props => handleWeight(props.weight)};
  font-size: ${props => handleSizing(props.size)};
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  ${text}
`;

export const Paragraph = styled.p`
  ${text}
`;

export const Span = styled.span`
  ${text}
`;
