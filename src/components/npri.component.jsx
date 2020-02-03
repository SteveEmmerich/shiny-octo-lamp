import React from 'react';
import { InputGroup, Row, Button, Form, Col } from 'react-bootstrap';
import Icon from '../Icon';
import { useState } from 'react';
import { useTractState, useTractDispatch } from '../state/context.provider';
import { delete_npri, update_npri } from '../state/actions';
/*

const tractOwnerships = [{
  id: uuidv4(),
  owner: "Luke Skywalker",
  interest: 0.5,
  lease: "Tatooine Lease",
  npris: [{
    id: uuidv4(),
    owner: "Leia Organa",
    interest: 0.45
  }, {
    id: uuidv4(),
    owner: "Han Solo",
    interest: 0.15
  }]
}]
*/
const Npri = props => {
  const { values, miId, onChange } = props;
  const npriValues = values;
  console.log(`npri props: ${JSON.stringify(values)}`);

  const dispatch = useTractDispatch();
  // Because we want onChange to be called every time we make one
  // We will wrap it in a function
  const remove = (e, id, miId) => {
    e.preventDefault();
    dispatch(delete_npri({ miId, id }));
    onChange();
  };
  const updateNpri = (e, npriId, miId) => {
    e.preventDefault();
    const { value, id } = e.target;
    console.log(`Changed field ${id}, with data ${value}`);
    console.log(`Parent ${miId}`);
    console.log(e.target.value);
    dispatch(update_npri({ miId, id: npriId, changes: { [id]: value } }));
    onChange(e.target.value);
  };
  return (
    <Form.Group
      data-testid={`npri-${npriValues.id}`}
      as={Row}
      controlId="NPRIForm"
    >
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <Icon icon="indent" />
          </InputGroup.Prepend>
          <Form.Control
            id="owner"
            value={npriValues.owner}
            onChange={e => updateNpri(e, npriValues.id, miId)}
          />
        </InputGroup>
      </Col>

      <Col></Col>
      <Col>
        <InputGroup>
          <Form.Control
            id="interest"
            value={npriValues.interest}
            onChange={e => updateNpri(e, npriValues.id, miId)}
          />

          <InputGroup.Append>
            <InputGroup.Text id="NPRIPercent">%</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Col>
      <Col></Col>
      <Col xs={1}>
        <Button
          onClick={e => remove(e, npriValues.id, miId)}
          data-testid={`npri-${npriValues.id}.remove`}
          variant="light"
        >
          <Icon icon="remove" />
        </Button>
      </Col>
    </Form.Group>
  );
};

export { Npri };
