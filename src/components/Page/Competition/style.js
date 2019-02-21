import Styled from 'styled-components'
import {rgba} from 'polished'

import {mq_max} from '../../../styles/Utils/Breakpoints'
import {ImgHero} from './images'

const StyledCompetition = Styled.main`
    overflow: hidden;
    font-size: 19px;
    font-family: 'Gotham Pro';

    .with-space {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .title {
        margin-bottom: 25px;
        font-size: 27px;
        color: white;
    }

    .title-lg {
        font-size: 72px;
        font-weight: bold;
    }

    [class$="content-container"] > .img-fluid {
        position: absolute;
    }

    ${mq_max.xl`
        font-size: 14px;

        .title-lg {
            font-size: 46px;
        }

        .with-space {
            padding-top: 60px;
            padding-bottom: 60px;
        }
    `}

    ${mq_max.xl`
        .title-lg {
            font-size: 36px;
        }
    `}

    ${mq_max.md`
        font-size: 12px;
    `}

    .hero {
        background-color: #a6b728;

        .hero-content-container {
            background: linear-gradient( ${rgba('white', .8)}, ${rgba('white', .8)}), url(${ImgHero}) center center no-repeat;
            background-size: cover;
            height: 700px;
            width: 100%;
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

            .hero-content-wrapper {
                display: flex;
                align-items: center;
                height: 650px;
            }

            .hero-clip-path {
                background: linear-gradient( ${rgba('#38bfc2', .8)}, ${rgba('#38bfc2', .8)});
                height: 500px;
                clip-path: polygon(0 20%, 100% 0, 100% 90%, 0 80%);
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

            ${mq_max.xl`
                height: 650px;

                .hero-content .img-fluid {
                    max-width: 300px;
                }
            `}

            ${mq_max.md`
                .hero-content .img-fluid {
                    max-width: 200px;
                    margin-top: -200px;
                    margin-bottom: 40px;
                }
            `}

            ${mq_max.sm`
                .hero-content .img-fluid {
                    margin-bottom: 25px;
                }
            `}
        }
    }

    .about {
        background-color: #a6b728;

        &-content-container {
            display: flex;
            align-items: center;
            height: 650px;

            .about-clip-path {
                background-color: #446340;
                height: 650px;
                clip-path: polygon(0 20%, 100% 0, 100% 90%, 0 80%);
                width: 100%;

                &:before {
                    display: block;
                    content: '';
                }
            }

            .about-content {
                position: absolute;
                width: 100%;
                left: 0;
                color: white;

                .img-fluid {
                    position: absolute;
                    max-width: 600px;
                    left: -20%;
                }

            }

            ${mq_max.xl`
                height: 500px;

                .about-clip-path {
                    position: absolute;
                    height: 500px;

                    &:nth-of-type(2) {
                        z-index: 2;
                        background-color: ${rgba('#446340', .8)}
                    }
                }

                .about-content {
                    .img-fluid {
                        max-width: 450px;
                    }
                }
            `}

            ${mq_max.lg`
                .about-content {
                    [class^="col"]:last-of-type {
                        z-index: 2;
                    }
                }
            `}
        }
    }

    .rules {
        background-color: #f9a050;
        padding-top: 0;

        &-content-container {
            display: flex;
            align-items: center;
            height: 700px;

            .rules-clip-path {
                position: absolute;
                background-color: #f4784a;
                height: 550px;
                clip-path: polygon(0 10%, 95% 0, 100% 100%, 0 100%);
                width: 65%;

                &:before {
                    display: block;
                    content: '';
                }

                &:nth-of-type(2) {
                    z-index: 2;
                    background-color: ${rgba('#f4784a', .8)}
                }
            }

            .rules-content {
                position: absolute;
                width: 100%;
                left: 0;
                color: white;
            }

            .img-fluid {
                position: absolute;
                max-width: 750px;
                top: -110px;
                right: -20%;
            }
        }

        ${mq_max.xl`
            &-content-container {
                height: 550px;

                .rules-clip-path {
                    height: 450px;
                }

                .img-fluid {
                    max-width: 600px;
                    top: -100px;
                    right: -150px;
                }
            }
        `}

        ${mq_max.lg`
            &-content-container {
                height: 550px;

                .rules-clip-path {
                    height: 450px;
                    width: 100%;
                }

                .col-md-6:first-of-type {
                    z-index: 2;
                }

                .img-fluid {
                    max-width: 600px;
                    top: -100px;
                    right: -250px;
                }
            }
        `}
    }

    .submission {
        background-color: #38bfc2;
        padding-bottom: 40px;

        .title {
            padding-top: 30px;
        }

        .submission-content-container {
            background-color: #333333;
            color: white;
            clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);

            .submission-content {
                [class*="col"]:nth-of-type(n+3) {
                    margin-top: 80px;
                }

                .list-inline {
                    bottom: 0;
                    margin-bottom: 10px;

                    .list-inline-item {
                        margin-right: 50px;

                        .img-fluid {
                            max-width: 50px;
                            margin-right: 15px;
                        }

                        a {
                            font-weight: bold;
                            color: white;
                        }
                    }
                }

                .descriptions {
                    color: white;
                    padding-left: 15px;
                    padding-top: 20px;
                }

                .btn {
                    bottom: 0;
                    font-size: 30px;
                }
            }

            ${mq_max.xl`
                padding-top: 90px;

                .submission-content {
                    .descriptions {
                        padding-top: 15px;
                    }
                }
            `}

            ${mq_max.lg`
                .submission-content {
                    [class*="col"]:nth-of-type(3) {
                        margin-top: 0;
                    }

                    .list-inline-item:last-of-type {
                        padding-top: 20px;
                    }
                }
            `}

            ${mq_max.md`
                .submission-content {
                    [class*="col"]:nth-of-type(n+3) {
                        display: flex;
                        justify-content: center;
                        margin-top: 40px;
                    }

                    .list-inline-item:last-of-type {
                        padding-top: 0;
                    }

                    .descriptions {
                        padding-top: 40px;
                    }
                }
            `}

            ${mq_max.sm`
                .submission-content {
                    [class*="col"]:nth-of-type(3) {
                        justify-content: start;
                    }

                    .list-inline-item {
                        display: block;
                        
                        &:last-of-type {
                            padding-top: 20px;
                        }
                    }

                    .descriptions {
                        padding-top: 40px;
                    }
                }
            `}
        }
    }
`

export default StyledCompetition