import React, { Component, Fragment } from 'react';
import {
	Avatar
} from 'antd';
import {
	Row,
	Col,
	Container
} from 'reactstrap';

import { Figure, Img } from '../../common';
import { H2, Paragraph, Span } from '../../typography';
import {
	ImgLogo
} from '../Festival/images.js';

import Logo from '../../../assets/logo.png';
import Imgs from './images';
import StyledBigResto from './style'
import '../../stylesheets/pages/bigresto.scss';

class BigResto extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Fragment>
				<StyledBigResto>

					<div className="big-resto">
						<section className="hero">
							<div className="hero-content-container">
								<Container>
									<Row>
										<Col lg={6} sm={6}>
											<div className="hero-content">
												<Row>
													<Col lg={6}>
														<img src={Logo} className="img-fluid" />
													</Col>
												</Row>
												<div className="desc text-justify">
													BIG Resto, merupakan solusi bagi para pengusaha yang bergerak di bidang HORECA (Hotel, Restaurant, Cafe) serta Catering dan Food Hawkers. Fitur terbaru dari Ralali.com ini sendiri adalah wujud nyata dari misi Ralali.com untuk memajukan bisnis kuliner di Indonesia, bukan hanya dalam hal berbelanja kebutuhan bisnis, tetapi juga memberikan inspirasi dan solusi bagi para penggiat bisnis tersebut.
													<br />
													<br />
													Fitur berbasis teknologi ini, terbuka bagi setiap kalangan pebisnis termasuk UKM dan UMKM sebagai penggerak roda ekonomi mikro di Indonesia. Kini dengan adanya BIG Resto, bisnis kuliner jadi lebih mudah, nyaman dan menyenangkan. Karena kami siap membantu, mengembangkan dan memperkuat usaha kuliner dengan bantuan teknologi dimulai dari smartphone yang anda miliki.
												</div>
											</div>
										</Col>
										<Col lg={6} sm={6}></Col>
									</Row>

								</Container>
								<div className="hero--clip"></div>
							</div>
						</section>
						<section className="container container-bigresto--brand">
							<Row>
								<Col lg={12}>
									<H2 size="title" color="#E3185D" weight="bold">
										Brand <Span color="#E3185D" weight="thin" size="title">Partner</Span>
									</H2>
								</Col>
							</Row>
							<Row>
								<Col lg={12}>
									<Row className="list-brand">
										<Col lg={12}>
											<Avatar src={Imgs.brands.ufsSquare} shape="square" size={340} />
										</Col>
										<Col lg={10} className="small-brands">
											<Row>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.cleanmatic} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.domo} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.masema} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.meval} className="ant-avatar--small" />
												</Col>
											</Row>
											<Row>

												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.nissin} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.sariroti} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.sharp} className="ant-avatar--small" />
												</Col>
												<Col>
													<Avatar shape="square" size={150} src={Imgs.brands.wise} className="ant-avatar--small" />
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col lg={12}>
									<Paragraph size="paragraph" className="text-justify">
										Dalam berjalannya, BIG Resto menjalin kemitraan dengan perusahaan serta brand - brand ternama di Indonesia, sehingga anda bisa mendapatkan seluruh kebutuhan usaha kuliner dengan kualitas terbaik, harga yang bersaing dan jaminan ketersediaan barang.
								</Paragraph>
								</Col>
							</Row>
						</section>
						<section className="footer">
							<Container>
								<Row>
									<Col lg={12} className="text-center">
										<H2 size="title" color="white" weight="bold" style={{ marginBottom: '50px' }}>
											Brand <Span color="white" weight="thin" size="title">Partner</Span>
										</H2>
									</Col>
								</Row>
								<Row>
									<Col lg={3} md={6} sm={6} xs={12}>
										<Figure width={200}>
											<Img src={ImgLogo} alt="BIG Resto"
												width={150} height={150} unit="%" />
										</Figure>
									</Col>
									<Col lg={{ size: 8, offset: 1 }} md={6} sm={6} xs={12}>
										<p className="text-justify desc">
											BIG Resto Foodpreneur Competition Project adalah sebuah ajang kompetisi bagi para pebisnis dan calon pebisnis di bidang kuliner untuk merealisasikan ide kreatif, unik, dan orisinil yang mereka miliki. Ide mereka dapat dituangkan dalam proposal usaha yang menggambarkan dan menjelaskan bentuk bisnis yang mereka idamkan.
										<br /><br />
											Selain itu ada juga Foodpreneur Recipe Competition dimana para audiens dapat mengikutsertakan resep makanan dan minuman hasil karya mereka di dalam kompetisi ini. Mereka akan dilombakan dari sisi rasa, presentasi serta inspirasi resep kreatif dan orisinil.
										<br /><br />
											Para pemenang dari kedua kompetisi ini akan mendapatkan apresiasi dari Ralali.com dan para official brand partners untuk diwujudkan ide usahanya dengan bimbingan dari para profesional di bidang kuliner dan Ralali.com sebagai solusi bisnis bagi para pengusaha.
										<br /><br />
											Selain  kompetisi online, BIG Resto juga mengadakan sebuah festival kuliner dan enterpreneurship sebagai puncak dari launching BIG Resto yang akan diadakan di akhir bulan Maret yang diberi nama “BIG Resto Foodpreneur Festival”. Dalam festival ini Ralali.com menggabungkan dari inspirasi, edukasi, hingga hiburan dengan balutan sebuah festival yang dikemas dengan ringan, menghibur dan menginspirasi bagi masyarakat umum, antusias, praktisi dan penggiat usaha kuliner di Indonesia.
									</p>
									</Col>
								</Row>
								<Row>
									<Col lg={12} className="competition text-center">
										<Img src={Imgs.competition} className="img-fluid" />
										<div>
											<H2 size="title" color="#E3185D" weight="bold">
												COMPETITION
										</H2>
										</div>
									</Col>
									<Col lg={12} className="festival text-center">
										<Img src={Imgs.festival} className="img-fluid" />
										<div>
											<H2 size="title" color="#E3185D" weight="bold">
												FESTIVAL
										</H2>
										</div>
									</Col>
								</Row>
							</Container>
						</section>
					</div>
				</StyledBigResto>
			</Fragment>)
	}
}

export default BigResto;
