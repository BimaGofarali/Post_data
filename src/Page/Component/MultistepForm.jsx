import React, { useState } from "react";
import "./MultistepForm.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function MultistepForm() {
  const [inputFields, setInputFields] = useState([
    { id: Math.floor(Math.random()), riwayatPendidikan:``},
  ]);

  const changeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
          if(id === i.id) {
              i[event.target.name] = event.target.value
          }
          return i;
      })
      setInputFields(newInputFields)
  };
  
  const hadleSubmit = (e) => {
      e.preventDefault();
      console.log(inputFields)
}

  const addInput = () => {
    setInputFields([...inputFields, { riwayatPendidikan: "" }]);
  };

  const deletInput = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  console.log(inputFields);
  return (
    <Container>
      <Row className="riwayat mt-5">
        <Col>
          <Form onSubmit = {hadleSubmit}>
            {inputFields.map((inputField) => (
              <div key={inputField.id}>
                <Form.Group className="mb-3">
                  <Form.Label>Riwayat Pendidikan</Form.Label>
                  <Form.Control
                    value={inputField.riwayatPendidikan}
                    onChange={event => changeInput(inputField.id, event)}
                    type="ketik disini"
                  />
                  <Form.Text className="text-muted">
                    Please fill the input
                  </Form.Text>
                </Form.Group>
                <Button onClick={deletInput}>Delet</Button>
              </div>
            ))}
          </Form>
        </Col>
        <Col>
          <Button onClick={addInput}>Add riwayat pendidikan</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MultistepForm;
