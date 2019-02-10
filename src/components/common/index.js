import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${props => props.bgColor || 'transparent'};
  ${props => props.bgImage ?
    ` background-image: url(${props.bgImg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `
    : ''
  }
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
  bgImg : PropTypes.string,
  type    : PropTypes.string,
  justify : PropTypes.string,
  align   : PropTypes.string,
};

export const Figure = styled.figure`
  width: ${props =>
    props.width + (props.unit || 'px')
    || 'initial'};
  height: ${props =>
    props.height + (props.unit || 'px')
    || 'initial' };
`;
Figure.propTypes = {
  width   : PropTypes.number,
  height  : PropTypes.number,
  unit    : PropTypes.string,
};

export const Img = styled.img`
  width: ${props =>
    props.width + (props.unit || 'px')
    || 'initial'};
  height: ${props =>
    props.height + (props.unit || 'px')
    || 'initial' };
  object-fit: ${props => props.fit};
`;
Img.propTypes = {
  width   : PropTypes.number,
  height  : PropTypes.number,
  unit    : PropTypes.string,
  fit     : PropTypes.string
};
