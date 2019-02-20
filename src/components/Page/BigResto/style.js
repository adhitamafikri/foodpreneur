import Styled from 'styled-components';
import {
    Div
} from '../../common';
import {
    HEADER_HEIGHT
} from '../../StyleVariables';
import Imgs from './images';

const StyledBigResto = Styled.main `
    .hero {
        height: 560px;
        background: #e3185d;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
        &--clip {
            position: absolute;
            top:0;
            background: linear-gradient(to right, 
                rgba(255, 255, 255, 0.62) 0%,
                rgba(255, 255, 255, 0.62) 60%, 
                transparent 60%, 
                transparent 100%);
            height: 550px;
            width: 100%;

            &:before {
                display: block;
                content: '';
            }
        }
        &-content {
            &-container {
                background: url(${Imgs.heroBanner}) top center no-repeat;
                background-size: cover;
                height: 490px;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
            }
            padding: 40px 0;
            z-index:1;
            .desc {
                margin-top:20px;
                font-size: 15px;
            }
        }
    }
    .footer {
        padding: 100px 0;
        background-color: #e3185d;
        clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%);
        .festival,
        .competition {
            position: relative;
            text-align: center;
            color: #901f54;
            margin-top: 40px;

            div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .desc {
            text-size: 14px;
            color: #fff;
        }
    }
`
export default StyledBigResto;