import React from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';

export default function Welcome() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Form noValidate className="w-50">         
        <Form.Group className='mb-3' controlId="validationCustom01">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Вася"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>                                        
        
        <Form.Group className='mb-3' controlId="validationCustom02">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Пупкин"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>       

        <Form.Group className='mb-3' controlId="validationCustom03">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control type="date" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>

        <Col className='mt-2'>
          <Form.Group controlId="validationCustom04">
            <Form.Label>Пол</Form.Label>
            <Form.Check
              type="radio"
              label="Мужской"
              name="gender"
              id="genderMale"
              required
            />
            <Form.Check       
              type="radio"
              label="Женский"
              name="gender"
              id="genderFemale"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please select your gender.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Row className="d-flex justify-content-center mt-3">
          <Button type="submit">Submit form</Button>
        </Row>
      </Form>
    </Container>
  );
}
