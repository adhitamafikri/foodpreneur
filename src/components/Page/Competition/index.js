import React from 'react';
import {
  Row,
  Col,
  Button } from 'antd';

import { Figure, Img } from '../../common';
import { H2, Paragraph } from '../../typography';
import { FullHeightContainer } from './style';

import FoodpreneurCompetition from '../../../assets/Competition/foodpreneur-competition.png';
import FoodpreneurSubmission from '../../../assets/Competition/foodpreneur-submission.png';

import '../../stylesheets/pages/competition.scss';  

const Competition = () => (
  <React.Fragment>
    <div className="competition">
      <section className="CompetitionDescription">
        <FullHeightContainer className="container container--desc">
          <div className="ornament ornament--blue"></div>
          <Row style={{ width: '100%' }}>
            <Col lg={{ span: 10, offset: 1 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Figure width={300} height={300}>
                <Img src={FoodpreneurCompetition} alt="Foodpreneur Competition"
                    width={100} unit="%" />
              </Figure>
            </Col>
            <Col lg={{ span: 10, offset: 1 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <Paragraph size="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aut saepe tenetur doloribus possimus obcaecati, et unde itaque numquam repellendus aspernatur quisquam 
                eius ex quam inventore nesciunt autem assumenda temporibus. 
                Possimus molestias, molestiae fugit at perspiciatis magnam nostrum harum blanditiis 
                distinctio porro nesciunt quae aliquam exercitationem?
              </Paragraph>
            </Col>
          </Row>
        </FullHeightContainer>
      </section>

      <section className="CompetitionAbout">
        <FullHeightContainer className="container container--about">
          <div className="ornament ornament--green"></div>
          <Row style={{ width: '100%' }}>
            <Col lg={{ span: 10, offset: 1 }}>
              <Figure>
                {/* <Img src={FoodpreneurAbout} alt="Foodpreneur About" /> */}
              </Figure>
            </Col>
            <Col lg={{ span: 10, offset: 1 }}>
              <H2 size="H2" color="white" weight="bold">
                About
              </H2>
              <Paragraph size="paragraph" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
                dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
                delectus perferendis consequatur dolore assumenda.
              </Paragraph>
            </Col>
          </Row>
        </FullHeightContainer>
      </section>

      <section className="CompetitionRules">
        <FullHeightContainer className="container container--rules">
          <div className="ornament ornament--orange"></div>
          <Row style={{ width: '100%' }}>
            <Col lg={{ span: 6, offset: 4 }}>
              <H2 size="H2" color="white" weight="bold">
                Rules
              </H2>
              <Paragraph size="paragraph" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
                dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
                delectus perferendis consequatur dolore assumenda.
              </Paragraph>
            </Col>
            <Col lg={{ span: 10, offset: 1 }}>
              <Figure>
                {/* <Img src={}></Img> */}
              </Figure>
            </Col>
          </Row>
        </FullHeightContainer>
      </section>

      <section className="CompetitionSubmission">
        <FullHeightContainer className="container container--submission">
          <div className="ornament ornament--black"></div>
          <Row style={{ width: '100%' }}>
            <Col lg={{ span: 14, offset: 1 }}>
              <Figure width={300} height={200}>
                <Img src={FoodpreneurSubmission} alt="Foodpreneur Submission"
                    width={100} unit="%" />
              </Figure>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <H2 size="H2" color="white" weight="bold">
                Submission
              </H2>
              <Paragraph size="paragraph" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
                dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
                delectus perferendis consequatur dolore assumenda.
              </Paragraph>
              <Button className="btn-submit">SUBMIT HERE</Button>
            </Col>
          </Row>
        </FullHeightContainer>
      </section>
    </div>
  </React.Fragment>
);

export default Competition;
