// resources/js/Pages/Users/Create.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    date_of_birth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/users', formData); // Отправляем данные на сервер
  };

  return (
    <div>
      <h1>Создать пользователя</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Пол:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Выберите пол</option>
            <option value="male">Мужчина</option>
            <option value="female">Женщина</option>
          </select>
        </div>
        <div>
          <label>Дата рождения:</label>
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
        </div>
        <button type="submit">Создать</button>
      </form>
      <Link href="/users">Назад к списку пользователей</Link>
    </div>
  );
};

export default Create;
