import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import {
    ImgLogo,
    ImgAbout,
    ImgRules,
    ImgSubmission,
    ImgFacebook,
    ImgInstagram
} from './images'

import StyledCompetition from './style'

class Competition extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <StyledCompetition>
                    <section className="hero">
                        <div className="hero-content-container">
                            <div className="hero-content-wrapper">
                                <div className="hero-clip-path"></div>
                                <div className="hero-content">
                                    <Container>
                                        <Row className="align-items-center">
                                            <Col md="6">
                                                <img className="img-fluid mx-auto d-block" src={ImgLogo} alt="competition" />
                                            </Col>
                                            <Col md="6" className="text-justify">
                                                Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about with-space">
                        <div className="about-content-container">
                            <div className="about-clip-path"></div>
                            <div className="about-content">
                                <Container>
                                    <Row className="align-items-center">
                                        <Col md="4">
                                        </Col>
                                        <Col md="8" className="text-justify">
                                            <h2 className="text-uppercase title title-lg">about</h2>
                                            <p className="descriptions">
                                                Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                                            </p>
                                        </Col>
                                        <img className="img-fluid mx-auto d-block" src={ImgAbout} alt="rules" />
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </section>
                    <section className="rules with-space">
                        <div className="rules-content-container">
                            <div className="rules-clip-path"></div>
                            <div className="rules-content">
                                <Container>
                                    <Row className="align-items-center">
                                        <Col md="6" className="text-justify">
                                            <h2 className="text-uppercase title title-lg">rules</h2>
                                            <p className="descriptions">
                                                Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                                            </p>
                                        </Col>
                                        <Col md="6">
                                        </Col>
                                        <img className="img-fluid mx-auto d-block" src={ImgRules} alt="rules" />
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </section>
                    <section className="submission">
                        <Container>
                            <h2 className="text-uppercase text-right title title-lg mb-0">submission</h2>
                        </Container>
                        <div className="submission-content-container with-space">
                            <div className="submission-content">
                                <Container>
                                    <Row>
                                        <Col md="8" className="text-justify">
                                            <img className="img-fluid mx-auto d-block" src={ImgSubmission} alt="submission" />
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                    <img className="img-fluid" src={ImgFacebook} alt="facebook" />
                                                    <a href="">Ralali.com</a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <img className="img-fluid" src={ImgInstagram} alt="instagram" />
                                                    <a href="">Ralali.com</a>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md="4">
                                            <p className="descriptions">
                                                Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                                            </p>
                                            <button type="button" className="btn btn-large w-100 btn-warning text-uppercase">submit here</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </section>
                </StyledCompetition>
            </Fragment>
        )
    }
}

export default Competition
