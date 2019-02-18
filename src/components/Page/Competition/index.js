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
            about: {
                title: 'about',
                descriptions: 'Quis amet ullamco anim tempor. Nostrud ex nulla ut nisi irure irure anim id eiusmod veniam id amet in exercitation. In amet veniam exercitation quis ut ut officia enim enim reprehenderit quis culpa do. Nostrud pariatur eu pariatur minim in aliqua minim do do velit anim ullamco.'
            },
            rules: {
                title: 'rules',
                descriptions: 'Pariatur ipsum ad Lorem nulla aliquip aliquip enim anim culpa culpa consectetur proident Lorem in. Amet cillum esse consectetur magna. Duis proident duis dolor consequat elit labore est. Cupidatat voluptate labore sunt anim id deserunt sit enim ullamco do.'
            },
            submission: {
                title: 'submission',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie, eros a facilisis eleifend, ipsum risus varius mi, in scelerisque massa est non dui. Nulla tempus tristique venenatis. Maecenas id erat at nulla laoreet luctus quis et orci. Nulla vitae justo quam. Phasellus aliquet placerat purus ut condimentum. Nulla venenatis orci vel feugiat gravida. Quisque fermentum pulvinar ligula quis ultricies. In pulvinar eros neque. Proin a metus in urna ornare convallis vitae nec libero. Duis a orci eget urna tristique bibendum aranum binalum socie.'
            },
            social_media: [
                {
                    id: 'r1',
                    name: 'Ralali.com',
                    link: 'https://www.facebook.com/',
                    img: ImgFacebook,
                },
                {
                    id: 'r2',
                    name: 'Ralali.com',
                    link: 'https://www.instagram.com/',
                    img: ImgInstagram
                }
            ]
        }
    }

    renderSocialMedia() {
        return this.state.social_media.map(item => (
            <li className="list-inline-item" key={item.id}>
                <img className="img-fluid" src={item.img} alt={item.name} />
                <a href={item.link}>{item.name}</a>
            </li>
        ))
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
                                            <h2 className="text-uppercase title title-lg">{this.state.about.title}</h2>
                                            <p className="descriptions">
                                                {this.state.about.descriptions}
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
                                            <h2 className="text-uppercase title title-lg">{this.state.rules.title}</h2>
                                            <p className="descriptions">
                                                {this.state.rules.descriptions}
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
                            <h2 className="text-uppercase text-right title title-lg mb-0">{this.state.submission.title}</h2>
                        </Container>
                        <div className="submission-content-container with-space">
                            <div className="submission-content">
                                <Container>
                                    <Row>
                                        <Col md="8" className="text-justify">
                                            <img className="img-fluid mx-auto d-block" src={ImgSubmission} alt="submission" />
                                            <ul className="list-unstyled list-inline">
                                                {this.renderSocialMedia()}
                                            </ul>
                                        </Col>
                                        <Col md="4">
                                            <p className="descriptions">
                                                {this.state.submission.descriptions}
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
