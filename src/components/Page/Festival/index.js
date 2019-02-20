import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import {
    ImgLogo,
    ImgFoods,
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
    ImgUltraJaya,
    ImgWorkshopKulinaria,
    ImgTalkshowNSharing,
    ImgFinalistShowcase,
    ImgEdutainmentDecorationTop,
    ImgFoodpreneur,
    ImgHypeCorner,
    ImgPopUpMarket,
    ImgFestivalDecorationTopLeft,
    ImgSpiceORamaStage,
    ImgCelebrityChef,
    ImgChallengeCorner,
    ImgEntertainmentDecorationTop,
    ImgDecorationCloud,
    ImgDecorationCloudLeft,
    ImgDecorationCloudRight,
    ImgFooter
} from './images'

import StyledFestival from './style'

class Festival extends Component {
    constructor(props) {
        super(props)
        this.state = {
            support: {
                title: 'supported by',
                rows: [
                    {
                        title: 'row 1',
                        items: [
                            {
                                title: 'Unilever Food Solutions',
                                img: ImgUnileverFoodSolutions
                            },
                            {
                                title: 'Heavenly Blush',
                                img: ImgHeavenlyBlush
                            }
                        ]
                    },
                    {
                        title: 'row 2',
                        items: [
                            {
                                title: 'Otsuka',
                                img: ImgOtsuka
                            },
                            {
                                title: 'Idmarco',
                                img: ImgIdmarco
                            },
                            {
                                title: 'Starbuck',
                                img: ImgStarbuck
                            },
                            {
                                title: 'Coca Cola',
                                img: ImgCocaCola
                            },
                            {
                                title: 'Wall\'s',
                                img: ImgWalls
                            }
                        ]
                    },
                    {
                        title: 'row 3',
                        items: [
                            {
                                title: 'Nestle',
                                img: ImgNestle
                            },
                            {
                                title: 'Cimory',
                                img: ImgCimory
                            },
                            {
                                title: 'Jolly Time',
                                img: ImgJollyTime
                            },
                            {
                                title: 'Nutragen',
                                img: ImgNutragen
                            },
                            {
                                title: 'OT Store',
                                img: ImgOtStore
                            },
                            {
                                title: 'Indomilk',
                                img: ImgIndomilk
                            }
                        ]
                    },
                    {
                        title: 'row 4',
                        items: [
                            {
                                title: 'Ben & Jerry\'s',
                                img: ImgBendNJerrys
                            },
                            {
                                title: 'Kellogg\'s',
                                img: ImgKellogs
                            },
                            {
                                title: 'Bogasari',
                                img: ImgBogasari
                            },
                            {
                                title: 'Nissin',
                                img: ImgNissin
                            },
                            {
                                title: 'Ultra Jaya',
                                img: ImgUltraJaya
                            }
                        ]
                    }
                ]
            },
            edutainment: {
                title: 'edutainment',
                items: [{
                        title: 'workshop kulinaria',
                        img: ImgWorkshopKulinaria,
                    },
                    {
                        title: 'talkshow & sharing',
                        img: ImgTalkshowNSharing,
                    },
                    {
                        title: 'finalist showcase',
                        img: ImgFinalistShowcase,
                    }
                ]
            },
            festival: {
                title: 'festival',
                items: [
                    {
                        title: 'foodpreneur',
                        img: ImgFoodpreneur,
                    },
                    {
                        title: 'hype corner',
                        img: ImgHypeCorner,
                    },
                    {
                        title: 'pop up market',
                        img: ImgPopUpMarket,
                    }
                ]
            },
            entertainment: {
                title: 'entertainment',
                items: [
                    {
                        title: 'spice-o-rama stage',
                        img: ImgSpiceORamaStage,
                    },
                    {
                        title: 'celebrity chef',
                        img: ImgCelebrityChef,
                    },
                    {
                        title: 'challenge corner',
                        img: ImgChallengeCorner,
                    }
                ]
            },
        }
    }

    renderSupport = (data) => {
        return data.rows.map((row, index) => {
            let column;

            if (index === 0) {
                column = row.items.map((item) => (
                    <Col md="4" key={item.title}>
                        <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />
                    </Col>
                ))
            } else {
                column = row.items.map((item) => (
                    <Col md="2" key={item.title}>
                        <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />
                    </Col>
                ))
            }

            return (
                <Row className="align-items-center justify-content-center" key={row.title}>
                    {column}
                </Row>
            )
        })
    }

    renderEdutainment = (data) => {
        return data.items.map((item) => (
            <Col md="4" key={item.title}>
                <figure className="mb-0">
                    <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />

                    <figcaption className="text-uppercase text-center descriptions with-space pb-0">
                        {item.title}
                    </figcaption>
                </figure>
            </Col>
        ))
    }

    renderFestival = (data) => {
        return data.items.map((item) => (
            <Col md="4" key={item.title}>
                <figure className="mb-0">
                    <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />

                    <figcaption className="text-uppercase text-center descriptions with-space pb-0">
                        {item.title}
                    </figcaption>
                </figure>
            </Col>
        ))
    }

    renderEntertainment = (data) => {
        return data.items.map((item) => (
            <Col md="4" key={item.title}>
                <figure className="mb-0">
                    <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />

                    <figcaption className="text-uppercase text-center descriptions with-space pb-0">
                        {item.title}
                    </figcaption>
                </figure>
            </Col>
        ))
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fragment>
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
                                        <Col md="6" className="text-justify">
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
                                    <Col md="6" className="text-justify">
                                        Irure qui eiusmod veniam qui anim consequat enim. Velit aliqua tempor veniam ullamco irure laboris officia ea. Qui ex dolor ipsum veniam occaecat anim elit. Laborum aliqua reprehenderit elit duis ut veniam consectetur sint ut. Deserunt amet exercitation amet enim ex aute ipsum. Elit magna sunt amet amet irure do qui. Occaecat consectetur fugiat pariatur laboris enim.
                                    </Col>
                                    <Col>
                                        <img className="img-fluid mx-auto d-block" src={ImgFoods} alt="Foods" />
                                    </Col>
                                </Row>
                            </Container>
                            <img className="img-fluid" src={ImgDecorationCloud} alt="Decoration" />
                            <img className="img-fluid" src={ImgFoodsDecorationBottom} alt="Decoration " />
                        </div>
                    </section>
                    <section className="support with-space">
                        <Container>
                            <h2 className="text-uppercase  text-center title title-line">
                                <span className="text">{this.state.support.title}</span>
                            </h2>

                            {this.renderSupport(this.state.support)}
                        </Container>
                    </section>
                    <section className="edutainment with-space">
                        <div className="edutainment-content-container">
                            <Container>
                                <h2 className="text-uppercase text-center title title-lg">
                                    {this.state.edutainment.title}
                                </h2>
                                <Row>
                                    {this.renderEdutainment(this.state.edutainment)}
                                </Row>
                            </Container>
                            <img className="img-fluid" src={ImgDecorationCloudRight} alt="Decoration" />
                            <img className="img-fluid" src={ImgEdutainmentDecorationTop} alt="Decoration" />
                            <img className="img-fluid" src={ImgDecorationCloudLeft} alt="Decoration" />
                        </div>
                    </section>
                    <section className="festival with-space">
                        <div className="festival-content-container">
                            <Container>
                                <h2 className="text-uppercase text-center title title-lg">
                                    {this.state.festival.title}
                                </h2>
                                <Row>
                                    {this.renderFestival(this.state.festival)}
                                </Row>
                            </Container>
                            <img className="img-fluid" src={ImgFestivalDecorationTopLeft} alt="Decoration" />
                            <img className="img-fluid" src={ImgDecorationCloud} alt="Decoration" />
                            <img className="img-fluid" src={ImgDecorationCloud} alt="Decoration" />
                        </div>
                    </section>
                    <section className="entertainment with-space">
                        <div className="entertainment-content-container">
                            <Container>
                                <h2 className="text-uppercase text-center title title-lg">
                                    {this.state.entertainment.title}
                                </h2>
                                <Row>
                                    {this.renderEntertainment(this.state.entertainment)}
                                </Row>
                            </Container>
                            <img className="img-fluid" src={ImgDecorationCloudLeft} alt="Decoration" />
                            <img className="img-fluid" src={ImgEntertainmentDecorationTop} alt="Decoration" />
                            <img className="img-fluid" src={ImgDecorationCloudRight} alt="Decoration" />
                        </div>
                    </section>
                    <section className="with-space pb-0">
                        <img className="img-fluid" src={ImgFooter} alt="Decoration" />
                    </section>
                </StyledFestival>
            </Fragment>
        )
    }
}

export default Festival
