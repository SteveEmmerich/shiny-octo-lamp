import React, { useEffect } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership from './EditTractOwnership';
import Icon from './Icon';
import { withProvider, useTract } from './state/context.provider';
import { set_state } from './state/actions';
import ErrorBoundary from './components/errorBounds.component';

const tractOwnerships = [
  {
    id: uuidv4(),
    owner: 'Luke Skywalker',
    interest: 0.5,
    lease: 'Tatooine Lease',
    npris: [
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: 0.45,
      },
      {
        id: uuidv4(),
        owner: 'Han Solo',
        interest: 0.15,
      },
    ],
  },
];

function App() {
  const [dispatch] = useTract();

  // On intial load fire set state
  useEffect(() => {
    dispatch(set_state(tractOwnerships));
    // List dispatch as a dep because it will never change
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>
                Landdox Code Challenge <Icon icon="smile" />
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <EditTractOwnership />
          </Col>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

export default withProvider(App);
