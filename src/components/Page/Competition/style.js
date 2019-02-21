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

                @media(max-width: 1200px){
                    .img-fluid {
                        max-width: 300px;
                    }
                    .text-justify {
                        
                    }
                }

                @media(max-width: 991px){
                    .text-justify {
                        font-size: 16px
                        margin-top: 20px;
                    }
                }
                @media(max-width: 768px){ 
                    .img-fluid {
                        max-width: 200px;
                        margin-top: -80px;
                    }
                    .text-justify {
                        font-size: 16px;
                        margin-top: 17px;
                    }
                }
                @media(max-width: 568px){ 
                    .text-justify {
                        font-size: 14px
                    }
                }
            }

                @media(max-width: 768px){
                    height: 500px;
                    .hero-content-wrapper {
                        height: 550px;
                    }
                    .hero-clip-path {
                        margin-top:20px;
                        height: 550px;
                    }
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
                .img-fluid {
                    position: absolute;
                    max-width: 600px;
                    left: -20%;
                }

            }

        }

        @media(max-width: 1200px){
            .about-content-container {
                .about-content {
                    .img-fluid {
                        max-width: 500px;
                    }
                }
            }
        }

        @media(max-width: 992px){
            padding-top: 40px;
            padding-bottom: 40px;
            .about-content-container {
                height:450px;
                .about-clip-path {
                    height: 550px;
                }

                .about-content {
                    .img-fluid {
                        max-width: 400px;
                    }
                    h2 {
                        font-size: 52px;
                    }
                    p {
                        font-size: 17px;
                    }
                }
            }
        }
        @media(max-width: 768px){
            padding-top: 0;
            padding-bottom: 0; 
            .about-content-container {
                height: 450px;
                .about-clip-path {
                    height: 450px;
                }
                .about-content {
                    .container {
                        max-width: 600px;
                    }
                    .img-fluid {
                        max-width: 300px;
                    }

                    h2 {
                        font-size: 37px;
                    }
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
        @media(max-width: 568px){
            .about-content-container {
                .about-content {
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
        @media(max-width: 500px){
            .about-content-container {
                .about-content {
                    .img-fluid {
                        max-width: 300px;
                        left: -140px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
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
                top: -110px;
                right: -20%;
            }
        }


        @media(max-width: 1200px){
            .rules-content-container {
                .rules-content {
                    .img-fluid {
                        max-width: 500px;
                    }
                }
            }
        }

        @media(max-width: 992px){
            padding-top: 40px;
            padding-bottom: 40px;
            .rules-content-container {
                height:450px;
                .rules-clip-path {
                    height: 450px;
                }

                .rules-content {
                    .img-fluid {
                        max-width: 450px;
                    }
                    h2 {
                        font-size: 52px;
                    }
                    p {
                        font-size: 17px;
                    }
                }
            }
        }
        @media(max-width: 768px){
            padding-top: 0;
            padding-bottom: 0; 
            .rules-content-container {
                height: 450px;
                .rules-clip-path {
                    height: 450px;
                }
                .rules-content {
                    .container {
                        max-width: 600px;
                    }
                    .img-fluid {
                        max-width: 440px;
                        right: -200px;
                    }

                    h2 {
                        font-size: 37px;
                    }
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
        @media(max-width: 570px){
            .rules-content-container {
                .rules-content {
                    .img-fluid {
                        max-width: 440px;
                        right: -250px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
        
        @media(max-width: 470px){
            .rules-content-container {
                .rules-content {
                    .img-fluid {
                        max-width: 440px;
                        right: -280px;
                    }   
                }
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
                .top {
                    [class^="col"] {
                        height: 650px;
                    }
                }
                

                .list-inline {
                    position: absolute;
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
                    padding-top: 25px;
                }

                .btn {
                    position: absolute;
                    bottom: 0;
                    font-size: 30px;
                }
            }
        }

        @media(max-width: 1200px){
            .submission-content-container {
                .submission-content {
                    .img-fluid {
                        max-width: 500px;
                    }
                }
            }
        }

        @media(max-width: 992px){
            padding-top: 40px;
            padding-bottom: 40px;
            h2 {
                font-size:37px;
            }
            .submission-content-container {
                height:550px;
                .submission-clip-path {
                    height: 440px;
                }

                .submission-content {
                    .top {
                        height: 280px;
                    }
                    .btn, .list-inline {
                        margin-top: 50px;
                        bottom: initial;
                        font-size: 20px;
                        li {
                            margin-bottom: 20px;
                            .img-fluid {
                                max-width: 40px;
                            }
                        }
                    }
                    .img-fluid {
                        max-width: 350px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
        @media(max-width: 768px){
            padding-top: 0;
            padding-bottom: 0; 
             
            h2 {
                font-size: 37px;
            }
            .submission-content-container {
                height: 650px;
                .submission-clip-path {
                    height: 450px;
                }
                .submission-content {
                    .top {
                        height: 480px;
                    }
                    .bottom {
                        margin-top: 30px;
                        [class^="col"] {
                            height: 30px;
                        }
                        .btn, .list-inline {
                            bottom: 0;
                            left: 0;
                            margin-top: 20px;
                            font-size: 20px;
                            .w-100 {
                                width: 80%;
                            }
                            li {
                                margin-top: 0;
                                .img-fluid {
                                    max-width: 40px;
                                }
                            }
                        }
                    }
                    .img-fluid {
                        max-width: 300px;
                    }

                    h2 {
                        font-size: 42px;
                    }
                    p {
                        font-size: 15px;
                    }
                }
            }
        }
        @media(max-width: 468px){

            padding-top: 0;
            padding-bottom: 0; 
            h2 {
                font-size: 27px;
            }
            .submission-content-container {
                height: 750px;
                .submission-content {
                    .top {
                        height: 450px;
                        [class^="col"] {
                            height: 300px;
                        }
                    }
                    .bottom {
                        margin-top: 150px;
                        [class^="col"] {
                            height: 30px;
                        }
                        .btn, .list-inline {
                            bottom: 0;
                            left: 25px;
                            font-size: 20px;
                            max-width: 90%;
                            li {
                                margin-top: 0;
                                margin-right: 20px;
                                font-size: 17px;
                                .img-fluid {
                                    max-width: 30px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default StyledCompetition