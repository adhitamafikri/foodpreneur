import React from 'react';
import {
  Row,
  Col,
  Button } from 'antd';

import { FullHeightContainer, OrnamentContainer } from './style'

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
            Left Part
            <Button type="primary">Button</Button>
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
            Left Part
            <Button type="primary">Button</Button>
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
