import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import StyledFestival from './style'

import ImgLogo from '../../../assets/Festival/logo.png'
import ImgFoods from '../../../assets/Festival/foods.png'
import ImgFoodsDecorationTop from '../../../assets/Festival/cloud-grey.png'
import ImgFoodsDecorationBottom from '../../../assets/Festival/catoon.png'

const Festival = () => (
    <React.Fragment>
        <StyledFestival>
            <section className="hero">
                <div className="hero-content-container">
                    <div className="hero-clip-path"></div>
                    <div className="hero-content">
                        <Container>
                            <Row className="align-items-center">
                                <Col md="6">
                                    <img className="img-fluid mx-auto d-block" src={ImgLogo} alt="Festival" />
                                </Col>
                                <Col md="6">
                                    Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
            <section className="foods">
                <div className="foods-content-container">
                    <Container>
                        <Row>
                            <Col md="6">
                                Irure qui eiusmod veniam qui anim consequat enim. Velit aliqua tempor veniam ullamco irure laboris officia ea. Qui ex dolor ipsum veniam occaecat anim elit. Laborum aliqua reprehenderit elit duis ut veniam consectetur sint ut. Deserunt amet exercitation amet enim ex aute ipsum. Elit magna sunt amet amet irure do qui. Occaecat consectetur fugiat pariatur laboris enim.
                            </Col>
                            <Col>
                                <img className="img-fluid mx-auto d-block" src={ImgFoods} alt="Foods" />
                            </Col>
                        </Row>
                    </Container>
                    <img className="img-fluid foods-decoration-top" src={ImgFoodsDecorationTop} alt="Decoration" />
                    <img className="img-fluid foods-decoration-bottom" src={ImgFoodsDecorationBottom} alt="Decoration " />
                </div>
            </section>
        </StyledFestival>
    </React.Fragment>
)

export default Festival
