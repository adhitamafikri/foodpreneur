import React from 'react';
import '../../stylesheets/pages/bigresto.scss';
import {
  Avatar } from 'antd';
 import { 
  Row,
  Col } from 'reactstrap';

import { Figure, Img } from '../../common';
import { H2, Paragraph, Span } from '../../typography';
import { FullHeightContainer, FullHeightOrnament } from './style';
import {
	ImgLogo
} from '../Festival/images.js';

import Logo from '../../../assets/logo.png';
import Imgs from './images';
console.log(Imgs);
const BigResto = () => (
	<React.Fragment>
		<div className="big-resto">
			<section>
			    <FullHeightOrnament className="ornament ornament--header"></FullHeightOrnament>
			      <FullHeightContainer className="container-bigresto container-bigresto--header">
			        <div style={{marginTop: '5%'}}>
			          <Col lg={{ size: 5, offset: 1 }}>
				          <Row>
					          <Col lg={12}>
					            <Figure width={300} height={50}>
					              <Img src={Logo} alt="BIG Resto"
					                  width={100} unit="%" />
					            </Figure>
					          </Col>
					          <Col lg={12}>
						            <Paragraph style={{fontSize:'15px'}}>
												BIG Resto, merupakan solusi bagi para pengusaha yang bergerak di bidang HORECA (Hotel, Restaurant, Cafe) serta Catering dan Food Hawkers. Fitur terbaru dari Ralali.com ini sendiri adalah wujud nyata dari misi Ralali.com untuk memajukan bisnis kuliner di Indonesia, bukan hanya dalam hal berbelanja kebutuhan bisnis, tetapi juga memberikan inspirasi dan solusi bagi para penggiat bisnis tersebut.
												<br/>
												<br/>
												Fitur berbasis teknologi ini, terbuka bagi setiap kalangan pebisnis termasuk UKM dan UMKM sebagai penggerak roda ekonomi mikro di Indonesia. Kini dengan adanya BIG Resto, bisnis kuliner jadi lebih mudah, nyaman dan menyenangkan. Karena kami siap membantu, mengembangkan dan memperkuat usaha kuliner dengan bantuan teknologi dimulai dari smartphone yang anda miliki.

						            </Paragraph>
					          </Col>
				          </Row>
			          </Col>
			        </div>
			      </FullHeightContainer>
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
										<Avatar shape="square" size={150} src={Imgs.brands.domo} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.masema} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.meval} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.nissin} className="ant-avatar--small"  />
									</Col>
								</Row>
								<Row>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.sariroti} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.sharp} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.ufs} className="ant-avatar--small"  />
									</Col>
									<Col>
										<Avatar shape="square" size={150} src={Imgs.brands.wise} className="ant-avatar--small"  />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{marginTop: '30px'}}>
					<Col lg={12}>
				    	<Paragraph size="paragraph">
				            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
				            dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
				            delectus perferendis consequatur dolore assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
				            dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
				            delectus perferendis consequatur dolore assumenda.
				        </Paragraph>
					</Col>
				</Row>
		    </section>
			<section>
				<FullHeightContainer className="container-bigresto container-bigresto--footer ornament--red ornament--footer">
				  <div className="container">
					  <Row>
						  <Col lg={12} className="text-center">
									<H2 size="title" color="white" weight="bold" style={{marginBottom: '50px'}}>
						       		Brand <Span color="white" weight="thin" size="title">Partner</Span>
						     	</H2>
						  </Col> 	
					  </Row>
					  <Row>
						  <Col lg={7} md={6} sm={6} xs={12}>
						      <Paragraph size="paragraph" color="white" className="text-center">
						        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
						        dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
						        delectus perferendis consequatur dolore assumenda.
						      </Paragraph>
						    </Col>
						    <Col lg={{ size: 3, offset: 1}} md={6} sm={6} xs={12}>
						      	<Figure width={200}>
					              <Img src={ImgLogo} alt="BIG Resto"
					                  width={150} height={150} unit="%" />
					            </Figure>
						    </Col>
					  </Row>
						<Row>
							<Col lg={12} className="competition text-center">
								<Img src={Imgs.competition} />
								<div>
									<H2 size="title" color="#E3185D" weight="bold">
										COMPETITION
									</H2>
								</div>
							</Col>
							<Col lg={12} className="festival text-center">
								<Img src={Imgs.festival} />
								<div>
									<H2 size="title" color="#E3185D" weight="bold">
										FESTIVAL
									</H2>
								</div>
							</Col>
						</Row>
				  </div>
				</FullHeightContainer>
			</section>
		</div>
	</React.Fragment>
);

export default BigResto;
