import Styled from 'styled-components'
import {rgba} from 'polished'

import ImgHero from '../../../assets/Festival/banner.png'

const StyledHero = Styled.section`
    background: linear-gradient( ${rgba('white', .8)}, ${rgba('white', .8)}), url(${ImgHero}) center center no-repeat;
    background-size: cover;
    height: 650px;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

        .hero-content-container {
            position: relative;
            display: flex;
            align-items: center;
            height: 600px;
        }

        .hero-clip-path {
            background: linear-gradient( ${rgba('red', .8)}, ${rgba('red', .8)});
            height: 500px;
            clip-path: polygon(0 10%, 100% 20%, 100% 80%, 0 90%);
            width: 100%;

            &:before {
                display: block;
                content: '';
            }
        }

        .hero-content {
            position: absolute;
            width: 100%;
            left: 0;
            color: white;
            text-align: justify;

            .img-fluid {
                max-width: 500px;
            }
        }
`

const StyledFood = Styled.section`
    background: red;
`

export {
    StyledHero,
    StyledFood
}
