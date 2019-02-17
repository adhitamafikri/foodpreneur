import React from 'react';
import '../../stylesheets/pages/bigresto.scss';
import {
  Avatar } from 'antd';
 import { 
  Row,
  Col,
  Button } from 'reactstrap';

import { Figure, Img } from '../../common';
import { H2, Paragraph, Span } from '../../typography';
import { FullHeightContainer, FullHeightOrnament } from './style';
import {
	ImgLogo
} from '../Festival/images.js';

import Logo from '../../../assets/logo.png';
// import Brand from '../../../assets/brands/1-hb.png';


const BigResto = () => (
	<React.Fragment>
		<div className="big-resto">
			<section>
			    <FullHeightOrnament className="ornament ornament--red ornament--header"></FullHeightOrnament>
			      <FullHeightContainer className="container-bigresto container-bigresto--header">
			        <div>
			          <Col lg={{ size: 5, offset: 1 }}>
				          <Row>
					          <Col lg={12} style={{ display: 'flex', justifyContent: 'center'}}>
					            <Figure width={300} height={50}>
					              <Img src={Logo} alt="BIG Resto"
					                  width={100} unit="%" />
					            </Figure>
					          </Col>
					          <Col lg={12} style={{ display: 'flex', justifyContent: 'center'}}>
						            <Paragraph size="paragraph">
						              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						              Aut saepe tenetur doloribus possimus obcaecati, et unde itaque numquam repellendus aspernatur quisquam 
						              eius ex quam inventore nesciunt autem assumenda temporibus. 
						              Possimus molestias, molestiae fugit at perspiciatis magnam nostrum harum blanditiis 
						              distinctio porro nesciunt quae aliquam exercitationem?
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
								<Avatar src="brands/1-hb.png" shape="square" size={340} />
							</Col>
							<Col lg={10}>
								<Row>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
								</Row>
								<Row>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
									</Col>
									<Col>
										<Avatar shape="square" size={150} icon="user" />
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
			<section className="CompetitionSubmission">
				<FullHeightContainer className="container-bigresto container-bigresto--footer ornament--red ornament--footer">
				  <div className="container">
					  <Row>
						  <Col lg={12} className="text-center">
								<H2 size="title" color="white" weight="bold">
						       		Brand <Span color="white" weight="thin" size="title">Partner</Span>
						     	</H2>
						  </Col> 	
					  </Row>
					  <Row>
						  <Col lg={8}>
						      <Paragraph size="paragraph" color="white" className="text-center">
						        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
						        dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
						        delectus perferendis consequatur dolore assumenda.
						      </Paragraph>
						    </Col>
						    <Col lg={{ size: 3, offset: 1}}>
						      	<Figure width={200}>
					              <Img src={ImgLogo} alt="BIG Resto"
					                  width={150} height={150} unit="%" />
					            </Figure>
						    </Col>
					  </Row>
				  </div>
				</FullHeightContainer>
			</section>
		</div>
	</React.Fragment>
);

export default BigResto;
