import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { MineralInterest } from '../components/mineralInterest.component';
import Icon from '../Icon';
import { useTract } from '../state/context.provider';
import { add_mi } from '../state/actions';

const EditTractOwnership = ({
  value = [],
  onChange = value => {
    console.log(`on change called: `, value);
  },
}) => {
  // Get and set state
  const [state, dispatch] = useTract();
  value = state;

  // dispatch adding a material interest
  const handleClick = e => {
    e.preventDefault();
    dispatch(add_mi({ owner: '', interest: 0, lease: '', npris: [] }));
    onChange(value);
  };

  return (
    <Container>
      {/* TODO: make this its own component */}
      <Row>
        <Col>
          <p>Owner</p>
        </Col>
        <Col>
          <p>Mineral Interest</p>
        </Col>
        <Col>
          <p>NPRI</p>
        </Col>
        <Col>
          <p>Lease</p>
        </Col>
      </Row>
      <Dropdown.Divider /> {/* Weird */}
      <RenderTracts tracts={value} onChange={e => onChange(value)} />
      <Button onClick={handleClick} variant="light">
        <Icon icon="add" />
        Add Mineral Interest
      </Button>
      <Dropdown.Divider />
    </Container>
  );
};

const RenderTracts = props => {
  const { tracts, onChange } = props;

  return tracts.map(tract => {
    return (
      <MineralInterest
        data-testid={`mineralInterest-${tract.id}`}
        id={`mineralInterest-${tract.id}`}
        key={tract.id}
        values={tract}
        onChange={onChange}
      ></MineralInterest>
    );
  });
};

export default EditTractOwnership;
