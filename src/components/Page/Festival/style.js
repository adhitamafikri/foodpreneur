import Styled from 'styled-components'
import {
    rgba,
} from 'polished'

import {ImgHero} from './images'
import Font1 from '../../../assets/Fonts/GothamPro/GothamPro.ttf'

const StyledFestival = Styled.main`
    @import url('https://fonts.googleapis.com/css?family=Lato');

    overflow: hidden;
    font-size: 19px;

    .with-space {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .title {
        margin-bottom: 60px;
        font-size: 27px;
        color: #58595b;
    }

    .title-lg {
        font-size: 56px;
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

    .descriptions {
        font-size: 29px;
    }

    [class$="content-container"] > .img-fluid {
        position: absolute;
    }

    .hero,
    .foods {
        font-family: 'Gotham Pro';
    }

    .hero {
        background: linear-gradient( ${rgba('white', .8)}, ${rgba('white', .8)}), url(${ImgHero}) center center no-repeat;
        background-size: cover;
        height: 650px;
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

        .hero-content-container {
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

            .img-fluid {
                max-width: 500px;
            }
        }
    }

    .foods .foods-content-container {        
        > .img-fluid {
            &:first-of-type {
                top: -215px;
                right: -230px;
                max-width: 380px;
            }

            &:last-of-type {
                bottom: 50px;
                left: 0;
                max-width: 700px;
            }
        }

        .container .img-fluid {
            max-width: 500px;
            margin-top: -110px;
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

    .edutainment,
    .entertainment {
        background-color: #ffe7d7;
    }

    .edutainment,
    .festival,
    .entertainment {
        .container {
            .img-fluid {
                height: 325px;
            }

            .title,
            .descriptions {
                font-family: 'KG Inimitable Original';
            }
        }
    }

    .edutainment {
        margin-top: 100px;

        .edutainment-content-container {
            > .img-fluid {
                &:first-of-type {
                    top: -115px;
                    right: 0;
                    max-width: 130px;
                }

                &:nth-of-type(2) {
                    top: -30px;
                    right: 20%;
                    max-width: 100px;
                }

                &:last-of-type {
                    bottom: 0;
                    left: 0;
                    max-width: 120px;
                }
            }

            .title,
            .descriptions {
                color: #e3185d;
            }
        }   
    }

    .festival .festival-content-container {
        > .img-fluid {
            &:first-of-type {
                top: 0;
                left: 0;
                max-width: 140px;
            }

            &:nth-of-type(2) {
                top: 180px;
                left: -60px;
                max-width: 260px;
                z-index: 1;
            }

            &:last-of-type {
                top: 0;
                right: -50px;
                max-width: 260px;
            }
        }

        .container {
            .img-fluid {
                position: relative;
                z-index: 2;
            }

            .title,
            .descriptions {
                color: #9559a4;
            }
        }
    }

    .entertainment .entertainment-content-container {
        > .img-fluid {
            &:first-of-type {
                top: 0;
                left: 0;
                max-width: 130px;
            }

            &:nth-of-type(2) {
                top: -92px;
                right: 9%;
                max-width: 160px;
            }

            &:last-of-type {
                bottom: 60px;
                right: 0;
                max-width: 140px;
            }
        }

        .title,
        .descriptions {
            color: #268779;
        }
    }

    .vector {
        width: 100%;
        height: 300px;

        .img-fluid {
            max-width: 150px;

            &:first-of-type {
                bottom: 0;
                max-width: 260px;
            }
        }
    }
`

export default StyledFestival
