import Styled from 'styled-components'
import {rgba} from 'polished'

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

    [class$="content-container"] > .img-fluid {
        position: absolute;
    }

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
        }
    }

    .about {
        background-color: #a6b728;

        .about-content-container {
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
            }

            .img-fluid {
                position: absolute;
                max-width: 600px;
                left: -20%;
            }
        }
    }

    .rules {
        background-color: #f9a050;
        padding-top: 0;

        .rules-content-container {
            display: flex;
            align-items: center;
            height: 700px;

            .rules-clip-path {
                background-color: #f4784a;
                height: 550px;
                clip-path: polygon(0 10%, 95% 0, 100% 100%, 0 100%);
                width: 65%;

                &:before {
                    display: block;
                    content: '';
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
                top: -20%;
                right: -20%;
            }
        }
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

                .list-inline {
                    margin-top: 80px;

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
                    padding-top: 25px;
                }

                .btn {
                    margin-top: 80px;
                    font-size: 30px;
                }
            }
        }
    }
`

export default StyledCompetition