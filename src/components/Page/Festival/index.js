import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import {
    StyledHero,
    StyledFood
} from './style'

import ImgLogo from '../../../assets/Festival/logo.png'

const Festival = () => (
    <React.Fragment>
        <StyledHero>
            <div className="hero-content-container">
                <div className="hero-clip-path"></div>
                <div className="hero-content">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="6">
                                <img className="img-fluid" src={ImgLogo} alt="Festival" />
                            </Col>
                            <Col md="6">
                                Dolor eu cupidatat dolore aliquip occaecat magna id cupidatat. Nostrud minim enim excepteur Lorem nisi voluptate. Sit aute ex commodo cupidatat ullamco. Consequat dolor eu Lorem laboris eu. Nostrud aute labore amet excepteur consectetur ipsum ipsum esse officia occaecat est laborum incididunt. Id mollit in consectetur quis cillum culpa aliquip aliqua. Anim ut excepteur labore proident laboris.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </StyledHero>
        <StyledFood>
            Food
        </StyledFood>
    </React.Fragment>
)

export default Festival
