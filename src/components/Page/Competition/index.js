import React from 'react';
import {
  Row,
  Col } from 'antd';

import { Figure, Img } from '../../common';
import { H2, Paragraph } from '../../typography';

import FoodpreneurCompetition from '../../../assets/Competition/foodpreneur-competition.png';

import '../../stylesheets/pages/competition.scss';  

const styles = {
  width: '100%'
};

const Competition = () => (
  <React.Fragment>
    <section className="CompetitionDescription">
      <div className="container container--desc full-height">
        <div className="ornament ornament--blue"></div>
        <Row style={styles}>
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
      </div>
    </section>

    <section className="CompetitionAbout">
      <div className="container container--about full-height">
        <div className="ornament ornament--green"></div>
        <Row style={styles}>
          <Col lg={{ span: 10, offset: 1 }}>
            <Figure>
              {/* <Img src={FoodpreneurAbout} alt="Foodpreneur About" /> */}
            </Figure>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <H2 size="H2" color="white" bold>
              About
            </H2>
            <Paragraph size="paragraph" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
              dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
              delectus perferendis consequatur dolore assumenda.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </section>

    <section className="CompetitionRules">
      <div className="container container--rules full-height">
        <div className="ornament ornament--orange"></div>
        <Row style={styles}>
          <Col lg={{ span: 10, offset: 1 }}>
            <Figure>
              {/* <Img src={FoodpreneurAbout} alt="Foodpreneur About" /> */}
            </Figure>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <H2 size="H2" color="white" bold>
              Rules
            </H2>
            <Paragraph size="paragraph" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
              dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
              delectus perferendis consequatur dolore assumenda.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </section>

    <section className="CompetitionSubmission">
      <div className="container container--submission full-height">
        <div className="ornament ornament--black"></div>
        <Row style={styles}>
          <Col lg={{ span: 10, offset: 1 }}>
            <Figure>
              {/* <Img src={FoodpreneurAbout} alt="Foodpreneur About" /> */}
            </Figure>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <H2 size="H2" color="white" bold>
              Submission
            </H2>
            <Paragraph size="paragraph" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
              dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
              delectus perferendis consequatur dolore assumenda.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </section>
  </React.Fragment>
);

export default Competition;
