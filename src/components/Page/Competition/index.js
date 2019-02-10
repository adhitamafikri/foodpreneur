import React from 'react';
import {
  Row,
  Col } from 'antd';

import { Figure, Img } from '../../common';
import { FullHeightContainer, OrnamentContainer } from './style';
import FoodpreneurCompetition from '../../../assets/Competition/foodpreneur-competition.png';

const styles = {
  width: '100%'
};

const Competition = () => (
  <React.Fragment>
    <section className="CompetitionDescription">
      <FullHeightContainer bgColor="#EEEEEE" type="flex" justify="space-between" align="center">
        <OrnamentContainer bgColor="#64FFDA" />
        <Row style={styles}>
          <Col lg={{ span: 10, offset: 1 }}>
            <Figure width={250} height={250}>
              <Img src={FoodpreneurCompetition} alt="Foodpreneur Competition"
                  width={100} unit="%" />
            </Figure>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
              dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
              delectus perferendis consequatur dolore assumenda.
            </p>
          </Col>
        </Row>
      </FullHeightContainer>
    </section>

    <section className="CompetitionAbout">
      <FullHeightContainer bgColor="#7CB342" type="flex" justify="space-between" align="center">
        <OrnamentContainer bgColor="#33691E" />
        <Row style={styles}>
          <Col lg={{ span: 10, offset: 1 }}>
          </Col>
          <Col lg={{ span: 10, offset: 1 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in labore pariatur quaerat quod ullam,
              dicta iusto hic excepturi! Quaerat soluta praesentium ad ab inventore
              delectus perferendis consequatur dolore assumenda.
            </p>
          </Col>
        </Row>
      </FullHeightContainer>
    </section>

    <section className="CompetitionRules">
      
    </section>

    <section className="CompetitionSubmission">
      
    </section>
  </React.Fragment>
);

export default Competition;
