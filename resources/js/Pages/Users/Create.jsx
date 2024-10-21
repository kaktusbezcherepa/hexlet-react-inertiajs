import React from 'react';
import { useForm, Link } from '@inertiajs/react';

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    gender: '',
    date_of_birth: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/users', {
      preserveState: true,
    });
  };

  return (
    <div>
      <h1>Создать нового пользователя</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="gender">Пол:</label>
          <select
            id="gender"
            value={data.gender}
            onChange={e => setData('gender', e.target.value)}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          {errors.gender && <div>{errors.gender}</div>}
        </div>

        <div>
          <label htmlFor="date_of_birth">Дата рождения:</label>
          <input
            id="date_of_birth"
            type="date"
            value={data.date_of_birth}
            onChange={e => setData('date_of_birth', e.target.value)}
          />
          {errors.date_of_birth && <div>{errors.date_of_birth}</div>}
        </div>

        <button type="submit" disabled={processing}>Создать</button>
      </form>
      <Link href="/users">Назад к списку пользователей</Link>
    </div>
  );
};

export default Create;