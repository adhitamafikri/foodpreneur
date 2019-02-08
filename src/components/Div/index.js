import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.bgColor || 'transparent'};
  ${props => props.type === 'flex' ? `
    display: flex;
    justify-content: ${props.justify};
    align-items: ${props.align};
    ` :
    'display: block;'
  }
`;

Div.propTypes = {
  bgColor : PropTypes.string,
  type    : PropTypes.string,
  justify : PropTypes.string,
  align   : PropTypes.string,
};

export default Div;
