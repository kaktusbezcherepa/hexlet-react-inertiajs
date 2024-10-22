import React from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import { useForm } from '@inertiajs/react';

export default function Welcome() {
  // Используем хук useForm для управления состоянием формы
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    gender: '',
    date_of_birth: '',
  });

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    post('/users', {
      preserveState: true,  
    });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Form noValidate className="w-50" onSubmit={handleSubmit}>         
        <Form.Group className='mb-3' controlId="validationCustom01">
          <Form.Label>ФИО</Form.Label>
          <Form.Control
            required
            type="text"
            value={data.name}
            onChange={e => setData('name', e.target.value)} 
            isInvalid={!!errors.name} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}  
          </Form.Control.Feedback>
        </Form.Group>                                        
        
        <Form.Group className='mb-3' controlId="validationCustom02">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="test@gmail.com"
            value={data.email}
            onChange={e => setData('email', e.target.value)} 
            isInvalid={!!errors.email} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}  
          </Form.Control.Feedback>
        </Form.Group>       

        <Form.Group className='mb-3' controlId="validationCustom03">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control 
            type="date" 
            required
            value={data.date_of_birth}
            onChange={e => setData('date_of_birth', e.target.value)} 
            isInvalid={!!errors.date_of_birth} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.date_of_birth}  
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
              value="male"
              checked={data.gender === 'male'}
              onChange={e => setData('gender', 'male')} 
              isInvalid={!!errors.gender} 
            />
            <Form.Check       
              type="radio"
              label="Женский"
              name="gender"
              id="genderFemale"
              required
              value="female"
              checked={data.gender === 'female'}
              onChange={e => setData('gender', 'female')} 
              isInvalid={!!errors.gender} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.gender} 
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Row className="d-flex justify-content-center mt-3">
          <Button type="submit" disabled={processing}>Создать</Button>
        </Row>
      </Form>
    </Container>
  );
}
