import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ user }) => {

 
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    gender: user.gender,
    date_of_birth: user.date_of_birth,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post(`/users/${user.id}`, { ...formData, _method: 'PUT' });
  };

  return (
    <div>
      <h1>Редактировать пользователя</h1>
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
        <button type="submit">Обновить</button>
      </form>
    </div>
  );
};

export default Edit;
