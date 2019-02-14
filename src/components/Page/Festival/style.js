import Styled from 'styled-components'
import {rgba} from 'polished'

import ImgHero from '../../../assets/Festival/banner.png'

const StyledFestival = Styled.main`
    overflow: hidden;
    font-size: 19px;

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

    .foods {
        padding-top: 50px;
        padding-bottom: 50px;
    
        .foods-content-container {
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
    }
`

export default StyledFestival
