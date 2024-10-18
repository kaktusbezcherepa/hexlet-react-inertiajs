// resources/js/Pages/Users/Show.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

const Show = () => {
  const { user } = usePage().props; 

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <div>
        <strong>Имя:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Пол:</strong> {user.gender === 'male' ? 'Мужчина' : 'Женщина'}
      </div>
      <div>
        <strong>Дата рождения:</strong> {user.date_of_birth}
      </div>
      <Link href="/users">Назад к списку пользователей</Link>
    </div>
  );
};

export default Show;
