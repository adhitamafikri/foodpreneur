import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import {
    ImgLogo,
    ImgFoods,
    ImgFoodsDecorationTop,
    ImgFoodsDecorationBottom,
    ImgUnileverFoodSolutions,
    ImgHeavenlyBlush,
    ImgOtsuka,
    ImgIdmarco,
    ImgStarbuck,
    ImgCocaCola,
    ImgWalls,
    ImgNestle,
    ImgCimory,
    ImgJollyTime,
    ImgNutragen,
    ImgOtStore,
    ImgIndomilk,
    ImgBendNJerrys,
    ImgKellogs,
    ImgBogasari,
    ImgNissin,
    ImgUltraJaya
} from './images'
import StyledFestival from './style'

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
            <section className="foods with-space">
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
            <section className="support with-space">
                <Container>
                    <h2 className="text-uppercase  text-center title title-line">
                        <span className="text">supported by</span>
                    </h2>

                    <Row className="align-items-center justify-content-center">
                        <Col md="4">
                            <img className="img-fluid mx-auto d-block" src={ImgUnileverFoodSolutions} alt="Unilever Food Solutions" />
                        </Col>
                        <Col md="4">
                            <img className="img-fluid mx-auto d-block" src={ImgHeavenlyBlush} alt="Heavenly Blush" />
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgOtsuka} alt="Otsuka" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgIdmarco} alt="Idmarco" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgStarbuck} alt="Starbuck" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgCocaCola} alt="Coca Cola" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgWalls} alt="Wall's" />
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgNestle} alt="Nestle" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgCimory} alt="Cimory" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgJollyTime} alt="Jelly Time" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgNutragen} alt="Nutragen" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgOtStore} alt="OT Store" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgIndomilk} alt="Indomilk" />
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgBendNJerrys} alt="Ben & Jerry's" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgKellogs} alt="Kellogg's" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgBogasari} alt="Bogasari" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgNissin} alt="Nissin" />
                        </Col>
                        <Col md="2">
                            <img className="img-fluid mx-auto d-block" src={ImgUltraJaya} alt="Ultra Jaya" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </StyledFestival>
    </React.Fragment>
)

export default Festival
