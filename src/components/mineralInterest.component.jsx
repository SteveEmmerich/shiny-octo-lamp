import React from 'react';
import { Form, Col, InputGroup, Button, Row } from 'react-bootstrap';
import Icon from '../Icon';
import { Npri } from './npri.component';

import { useTractDispatch } from '../state/context.provider';
import { add_npri, delete_mi, update_mi } from '../state/actions';

const MineralInterest = props => {
  const { values, onChange } = props;
  console.log(`values of MI : ${JSON.stringify(values)}`);
  const miValues = values;
  //const [miValues, setMiValues] = useState(values);
  const dispatch = useTractDispatch();
  console.log(`use state values: ${miValues}`);
  const AddNPRI = (e, id) => {
    e.preventDefault();
    dispatch(add_npri({ id, data: { owner: '', interest: 0.0 } }));

    //setMiValues(...miValues);
    onChange();
  };
  const remove = (e, id) => {
    e.preventDefault();
    dispatch(delete_mi(id));
    onChange();
  };
  const updateMi = (e, miId) => {
    e.preventDefault();
    const { value, id } = e.target;
    dispatch(update_mi({ id: miId, changes: { [id]: value } }));
    onChange();
  };
  // wrap the setMi in an onchange handler that calls both setMi and onchange.
  return (
    <Form data-testid={`mineralInterest-${miValues.id}`}>
      <Form.Group as={Row} controlId={`MinernalInterest-${miValues.id}`}>
        <Col>
          <Form.Control
            id="owner"
            value={miValues.owner}
            onChange={e => updateMi(e, miValues.id)}
          />
        </Col>
        <Col>
          <InputGroup>
            <Form.Control
              id="interest"
              value={miValues.interest}
              onChange={e => updateMi(e, miValues.id)}
            />

            <InputGroup.Append>
              <InputGroup.Text id="MineralInterestPercent">%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control
            id="lease"
            value={miValues.lease}
            onChange={e => updateMi(e, miValues.id)}
          />
        </Col>
        <Col xs={1}>
          <Button
            data-testid={`mineralInterest-${miValues.id}.remove`}
            onClick={e => remove(e, miValues.id)}
            variant="light"
          >
            <Icon icon="remove" />
          </Button>
        </Col>
      </Form.Group>

      <RenderNPRIChildren
        npris={miValues.npris}
        miId={miValues.id}
        onChange={onChange}
      ></RenderNPRIChildren>
      <Button variant="light" onClick={e => AddNPRI(e, miValues.id)}>
        <Icon icon="add" />
        Add NPRI
      </Button>
    </Form>
  );
};

const RenderNPRIChildren = ({ npris, miId, onChange }) => {
  console.log(`mi Id: ${miId}, npris: ${JSON.stringify(npris, null, 2)}`);

  return npris
    ? npris.map(npri => (
        <Npri
          key={npri.id}
          values={npri}
          miId={miId}
          onChange={onChange}
        ></Npri>
      ))
    : null;
};
export { MineralInterest };
