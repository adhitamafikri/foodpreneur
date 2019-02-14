import React from 'react';
import '../../stylesheets/pages/bigresto.scss';
import {
  Row,
  Col,
  Avatar } from 'antd';
 import { Button } from 'reactstrap';

import { Figure, Img } from '../../common';
import { H2, Paragraph, Span } from '../../typography';
import { FullHeightContainer, FullHeightOrnament } from './style';

import Logo from '../../../assets/logo.png';
// import Brand from '../../../assets/brands/1-hb.png';


const BigResto = () => (
	<React.Fragment>
		<div className="big-resto">
			<section>
			    <FullHeightOrnament className="ornament ornament--red"></FullHeightOrnament>
			      <FullHeightContainer className="container--header">
			        <Row style={{ paddingTop: '150px'}}>
			          <Col lg={{ span: 10, offset: 2 }} sm={{ span: 10, offset: 2 }}>
				          <Col lg={24} style={{ display: 'flex', justifyContent: 'center'}}>
				            <Figure width={300} height={50}>
				              <Img src={Logo} alt="BIG Resto"
				                  width={100} unit="%" />
				            </Figure>
				          </Col>
				          <Col lg={24} style={{ display: 'flex', justifyContent: 'center'}}>
					            <Paragraph size="paragraph">
					              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					              Aut saepe tenetur doloribus possimus obcaecati, et unde itaque numquam repellendus aspernatur quisquam 
					              eius ex quam inventore nesciunt autem assumenda temporibus. 
					              Possimus molestias, molestiae fugit at perspiciatis magnam nostrum harum blanditiis 
					              distinctio porro nesciunt quae aliquam exercitationem?
					            </Paragraph>
				          </Col>
			          </Col>
			        </Row>
			      </FullHeightContainer>
		    </section>
		    <section className="container">
				<Row>
					<Col lg={{ span: 22, offset: 2 }}>
						<H2 size="title" color="#E3185D" weight="bold">
				       		Brand <Span color="#E3185D" weight="thin" size="title">Partner</Span>
				     	</H2>
					</Col>
				</Row>
				<Row>
					<Col lg={{ span: 20, offset: 4 }}>
						<Row>
							<Col span={7}>
								<Avatar src="brands/1-hb.png" shape="square" size={310} />
							</Col>
							<Col span={13}>
								<Row>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
								</Row>
								<Row style={{marginTop:'10px'}}>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{marginTop: '20px'}}>
					<Col lg={{ span: 20, offset: 4 }}>
						<Row>
							<Col span={6} push={14}>
								<Avatar src="brands/2-ufs.png" shape="square" size={310} style={{marginLeft:'-17px'}} />
							</Col>
							<Col span={13} pull={6}>
								<Row>
									<Col lg={6} md={5}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6} md={5}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6} md={5}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6} md={5}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
								</Row>
								<Row style={{marginTop:'10px'}}>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col lg={6}>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{marginTop: '30px'}}>
					<Col lg={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }}>
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
		    </section>
		</div>
	</React.Fragment>
);

export default BigResto;
