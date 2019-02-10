import React from 'react';
import '../../stylesheets/pages/bigresto.scss';
import {
  Row,
  Col,
  Button } from 'antd';

import { Figure, Img } from '../../common';
import { H2, Paragraph, Span } from '../../typography';
import { FullHeightContainer, FullHeightOrnament } from './style';

import FoodpreneurCompetition from '../../../assets/logo.png';
import FoodpreneurSubmission from '../../../assets/Competition/foodpreneur-submission.png';


const BigResto = () => (
	<React.Fragment>
		<div className="big-resto">
			<section>
			    <FullHeightOrnament className="ornament ornament--red"></FullHeightOrnament>
			      <FullHeightContainer className="container container--header">
			        <Row style={{ paddingTop: '150px'}}>
			          <Col lg={{ span: 10, offset: 2 }} sm={{ span: 10, offset: 2 }}>
				          <Col lg={24} style={{ display: 'flex', justifyContent: 'center'}}>
				            <Figure width={300} height={50}>
				              <Img src={FoodpreneurCompetition} alt="Foodpreneur Competition"
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
		    <section className="">
		    	<Row>
		    		<Col lg={{ span: 10, offset: 2 }}>
			    		<H2 size="H1" color="#E3185D" weight="bold">
		               		Brand <Span size="100" color="#E3185D" weight="thin" size="H1">Partner</Span>
		             	</H2>
		    		</Col>
		    	</Row>
		    </section>
		</div>
	</React.Fragment>
);

export default BigResto;
