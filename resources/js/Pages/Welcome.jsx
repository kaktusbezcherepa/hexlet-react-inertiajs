import React from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';

export default function Welcome() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Form noValidate className="w-25">         
        <Row>                   
          <Form.Group controlId="validationCustom01">
            <Form.Label className='mt-2'>Имя</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Вася"
              className='mt-2'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>                                        
          <Form.Group controlId="validationCustom02">
            <Form.Label className='mt-2'>Фамилия</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Пупкин"
              className='mt-2'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
                   
        </Row>
        <Row> 
          <Form.Group controlId="validationCustom03">
            <Form.Label className='mt-2'>Дата рождения</Form.Label>
            <Form.Control className='w-50 mt-2' type="date" required />
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
        </Row>
        <Row className="d-flex justify-content-center mt-3">
          <Button type="submit">Submit form</Button>
        </Row>
      </Form>
    </Container>
  );
}