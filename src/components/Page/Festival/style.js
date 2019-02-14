import Styled from 'styled-components'
import {rgba} from 'polished'

import {ImgHero} from './images'

const StyledFestival = Styled.main`
    overflow: hidden;
    font-size: 19px;

    .with-space {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .title {
        padding-bottom: 50px;
        font-size: 27px;
        color: #58595b;
    }

    .title-line {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            border-bottom: 4px solid #929497;
            z-index: 1;
        }

        
        .text {
            background: white;
            padding-left: 20px;
            padding-right: 20px;
            z-index: 2;
        }
    }

    .hero {
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
            background: linear-gradient( ${rgba('#ed1e79', .8)}, ${rgba('#ed1e79', .8)});
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
    }

    .foods .foods-content-container {
        position: relative;

        .img-fluid {
            max-width: 500px;
            margin-top: -100px;
        }
        
        .foods-decoration-top,
        .foods-decoration-bottom {
            position: absolute;
        }

        .foods-decoration-top {
            top: -100px;
            right: -230px;
            max-width: 400px;
        }

        .foods-decoration-bottom {
            bottom: 50px;
            left: 0;
            max-width: 700px;
        }
    }

    .support .row {
        .img-fluid {
            padding: 10px 20px;
        }

        &:first-of-type {
            padding-bottom: 70px;
            
            .img-fluid {
                max-width: 225px;
                padding: 0
            }
        }
    }
`

export default StyledFestival
