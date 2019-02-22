import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col,
    Card
} from 'reactstrap'

import {
    ImgLogo,
    ImgUnileverFoodSolutions,
    ImgCleanMatic,
    ImgDomo,
    ImgMasema,
    ImgMeval,
    ImgNissin,
    ImgSariRoti,
    ImgSharp,
    ImgWise,
    ImgLogoFestival
} from './images';

import StyledHome from './style'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand_partner: {
                title: 'brand <span class="title-light">partner</span>',
                descriptions: 'Dalam berjalannya, BIG Resto menjalin kemitraan dengan perusahaan serta brand - brand ternama di Indonesia, sehingga anda bisa mendapatkan seluruh kebutuhan usaha kuliner dengan kualitas terbaik, harga yang bersaing dan jaminan ketersediaan barang.',
                rows: [
                    {
                        title: 'row 1',
                        items: [
                            {
                                title: 'Unilever Food Solutions',
                                img: ImgUnileverFoodSolutions
                            },
                        ]
                    },
                    {
                        title: 'row 2',
                        items: [
                            {
                                title: 'Clean Matic',
                                img: ImgCleanMatic
                            },
                            {
                                title: 'Domo',
                                img: ImgDomo
                            },
                            {
                                title: 'Masema',
                                img: ImgMasema
                            },
                            {
                                title: 'Meval',
                                img: ImgMeval
                            },
                        ]
                    },
                    {
                        title: 'row 3',
                        items: [
                            {
                                title: 'Nissin',
                                img: ImgNissin
                            },
                            {
                                title: 'Sari Roti',
                                img: ImgSariRoti
                            },
                            {
                                title: 'Sharp',
                                img: ImgSharp
                            },
                            {
                                title: 'Wise',
                                img: ImgWise
                            },
                        ]
                    }
                ]
            },
        }
    }

    renderBrandPartner = (data) => {
        return data.rows.map((row, index) => {
            let column;

            if (index === 0) {
                column = row.items.map((item) => (
                    <Col md="6" lg="4" key={item.title}>
                        <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />
                    </Col>
                ))
            } else {
                column = row.items.map((item) => (
                    <Col md="6" lg="2" key={item.title}>
                        <Card className="border-0">
                            <img className="img-fluid mx-auto d-block" src={item.img} alt={item.title} />
                        </Card>
                    </Col>
                ))
            }

            return (
                <Row className="align-items-center justify-content-start" key={row.title}>
                    {column}
                </Row>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <StyledHome>
                    <section className="hero">
                        <div className="hero-content-container">
                            <div className="hero-content-wrapper">
                                <div className="hero-clip-path"></div>
                                <div className="hero-content">
                                    <Container>
                                        <Row>
                                            <Col md="6">
                                                <img className="img-fluid" src={ImgLogo} alt="logo"/>
                                                BIG Resto, merupakan solusi bagi para pengusaha yang bergerak di bidang HORECA (Hotel, Restaurant, Cafe) serta Catering dan Food Hawkers. Fitur terbaru dari Ralali.com ini sendiri adalah wujud nyata dari misi Ralali.com untuk memajukan bisnis kuliner di Indonesia, bukan hanya dalam hal berbelanja kebutuhan bisnis, tetapi juga memberikan inspirasi dan solusi bagi para penggiat bisnis tersebut.
                                                <br />
                                                <br />
                                                Fitur berbasis teknologi ini, terbuka bagi setiap kalangan pebisnis termasuk UKM dan UMKM sebagai penggerak roda ekonomi mikro di Indonesia. Kini dengan adanya BIG Resto, bisnis kuliner jadi lebih mudah, nyaman dan menyenangkan. Karena kami siap membantu, mengembangkan dan memperkuat usaha kuliner dengan bantuan teknologi dimulai dari smartphone yang anda miliki.
                                            </Col>
                                            <Col md="6">
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="brand-partner with-space">
                        <Container>
                            <h2 
                                dangerouslySetInnerHTML={{ __html: this.state.brand_partner.title }} 
                                className="text-uppercase title title-lg" />
                            
                            {this.renderBrandPartner(this.state.brand_partner)}

                            <p className="descriptions">
                                {this.state.brand_partner.descriptions}
                            </p>
                        </Container>
                    </section>
                    <section className="foodpreneur with-space">
                        <Container>
                            <h2 className="text-uppercase text-center title title-lg">
                                food <span className="title-light">preneur</span>
                            </h2>
                            
                            <Row>
                                <Col md="7" className="order-2 order-md-1">
                                    <p className="text-justify">
										BIG Resto Foodpreneur Competition Project adalah sebuah ajang kompetisi bagi para pebisnis dan calon pebisnis di bidang kuliner untuk merealisasikan ide kreatif, unik, dan orisinil yang mereka miliki. Ide mereka dapat dituangkan dalam proposal usaha yang menggambarkan dan menjelaskan bentuk bisnis yang mereka idamkan.
									    <br /><br />
										Selain itu ada juga Foodpreneur Recipe Competition dimana para audiens dapat mengikutsertakan resep makanan dan minuman hasil karya mereka di dalam kompetisi ini. Mereka akan dilombakan dari sisi rasa, presentasi serta inspirasi resep kreatif dan orisinil.
									    <br /><br />
										Para pemenang dari kedua kompetisi ini akan mendapatkan apresiasi dari Ralali.com dan para official brand partners untuk diwujudkan ide usahanya dengan bimbingan dari para profesional di bidang kuliner dan Ralali.com sebagai solusi bisnis bagi para pengusaha.
									    <br /><br />
										Selain  kompetisi online, BIG Resto juga mengadakan sebuah festival kuliner dan enterpreneurship sebagai puncak dari launching BIG Resto yang akan diadakan di akhir bulan Maret yang diberi nama “BIG Resto Foodpreneur Festival”. Dalam festival ini Ralali.com menggabungkan dari inspirasi, edukasi, hingga hiburan dengan balutan sebuah festival yang dikemas dengan ringan, menghibur dan menginspirasi bagi masyarakat umum, antusias, praktisi dan penggiat usaha kuliner di Indonesia.
								    </p>
                                </Col>
                                <Col md="5" className="order-1 order-md-2">
                                    <img class="img-fluid mx-auto d-block" src={ImgLogoFestival} alt="Festival" />
                                </Col>

                                <Col xs="12" className="order-3">
                                    <a href="/competition">
                                        <div className="banner-competition">
                                            <h3 className="text-uppercase text-center title title-lg">Food Competition</h3>
                                        </div>
                                    </a>
                                </Col>
                                
                                <Col xs="12" className="order-4">
                                    <a href="/festival">
                                        <div className="banner-festival">
                                            <h3 className="text-uppercase text-center title title-lg">Food Festival</h3>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </StyledHome>
            </Fragment>
        )
    }
}

export default Home
