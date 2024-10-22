import React from 'react';
import { Link } from '@inertiajs/react';

const Show = ({ user }) => {
  return (
    <div>
      <h1>Детали пользователя</h1>
      <p>Email: {user.email}</p>
      <p>Имя: {user.name}</p>
      <p>Пол: {user.gender}</p>
      <p>Дата рождения: {user.date_of_birth}</p>
      <Link href="/users">Назад к списку пользователей</Link>
    </div>
  );
};

export default Show;
