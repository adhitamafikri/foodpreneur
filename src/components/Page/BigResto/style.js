import Styled from 'styled-components';
import {rgba} from 'polished'
import {mq_max} from '../../../styles/Utils/Breakpoints'

import {
    ImgHero,
    ImgBannerCompetition,
    ImgBannerFestival
} from './images';

const StyledHome = Styled.main`
    overflow: hidden;
    font-size: 19px;
    font-family: 'Gotham Pro';

    .with-space {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .title {
        margin-bottom: 60px;
        font-size: 27px;
        color: #e3185d;
    }

    .title-lg {
        font-size: 67px;
        font-weight: bold;
    }

    .title-light {
        font-weight: 300;
    }

    ${mq_max.xl`
        font-size: 14px;

        .with-space {
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .title-lg {
            font-size: 36px;
        }
    `}

    ${mq_max.md`
        font-size: 12px;
    `}

    .hero {
        height: 950px;
        background-color: #e3185d;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 84%);

        &-content-container {
            height: 850px;
            background: url(${ImgHero}) center top no-repeat;
            background-size: cover;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);

            .hero-clip-path {
                background: linear-gradient( ${rgba('white', .8)}, ${rgba('white', .8)});
                height: 850px;
                width: 60%;
                position: absolute;

                &:before {
                    display: block;
                    content: '';
                }
            }

            .hero-content {
                padding-top: 60px;

                .img-fluid {
                    margin-bottom: 60px;
                    padding-left: 60px;
                    padding-right: 60px;
                }
            }
        }

        ${mq_max.xl`
            height: 725px;

            &-content-container {
                height: 650px

                .hero-clip-path {
                    height: 650px
                }
            }
        `}

        ${mq_max.lg`
            &-content-container {
                .hero-content .img-fluid {
                    margin-bottom: 40px;
                    padding-left: 40px;
                    padding-right: 40px;
                }
            }
        `}

        ${mq_max.md`
            height: 565px;
        
            &-content-container {
                height: 500px;

                .hero-clip-path {
                    height: 500px;
                    width: 100%;
                }

                .hero-content .img-fluid {
                    padding-left: 100px;
                    padding-right: 100px;
                }
            }
        `}

        ${mq_max.sm`
            height: 615px;
        
            &-content-container {
                height: 550px;

                .hero-clip-path {
                    height: 550px;
                }

                .hero-content .img-fluid {
                    padding-left: 70px;
                    padding-right: 70px;
                }
            }
        `}

        ${mq_max.xs`
            height: 625px;

            &-content-container {
                height: 560px;

                .hero-clip-path {
                    height: 560px;
                }

                .hero-content .img-fluid {
                    padding-left: 50px;
                    padding-right: 50px;
                }
            }
        `}
    }

    .brand-partner {
        .container {
            .descriptions {
                margin-top: 60px;
            }

            .row {
                margin-right: -7.5px;
                margin-left: -7.5px;

                [class^="col"] {
                    padding-top: 15px;
                    padding-left: 7.5px;
                    padding-right: 7.5px;

                    &:nth-of-type(2n) .card {
                        background: #fb91b5;
                    }

                    &:nth-last-of-type(2n) .card {
                        background: #d8d8d8;
                    }
                }

                &:nth-of-type(2),
                &:nth-of-type(3) {
                    [class^="col"] {
                        padding-top: 15px;
                    }

                    .card {
                        padding-top: 43px;
                        padding-bottom: 43px;
                    }
                }
            }
        }

        ${mq_max.xl`
            .row {
                &:nth-of-type(2),
                &:nth-of-type(3) {
                    .card {
                        padding-top: 28px;
                        padding-bottom: 28px;
                    }
                }
            }
        `}

        ${mq_max.lg`
            padding-bottom: 0;
        `}

        ${mq_max.md`
            .row:first-of-type {
                .img-fluid {
                    width: 100%;
                }
            }
        `}
    }

    .foodpreneur {
        background: linear-gradient( ${rgba('#e3185d', .8)}, ${rgba('#e3185d', .8)}), url(${ImgHero}) center center no-repeat;
        background-size: cover;
        color: white;
        clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%);

        a {
            text-decoration: none;
        }

        .container {
            > .title {
                margin-top: 90px;
                color: white;
            }

            .img-fluid {
                max-width: 350px;
            }
        }


        .banner-competition,
        .banner-festival {
            padding-top: 70px;
            padding-bottom: 70px;

            .title-lg {
                margin-bottom: 0;
            }
        }

        .banner-competition {
            background: url(${ImgBannerCompetition}) center top no-repeat;
            background-size: cover;
            margin-top: 80px;
            margin-bottom: 40px;
        }

        .banner-festival {
            background: url(${ImgBannerFestival}) center top no-repeat;
            background-size: cover;
        }

        ${mq_max.xl`
            .container .img-fluid {
                max-width: 300px;
            }

            .banner-competition {
                margin-top: 60px;
            }
        `}

        ${mq_max.lg`
            .container .img-fluid {
                max-width: 250px;
            }
        `}

        ${mq_max.md`
            clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);

            .container .img-fluid {
                margin-bottom: 60px;
            }
        `}
    }
`

export default StyledHome