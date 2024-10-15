// resources/js/Pages/Users/Index.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Index = ({ users }) => {
  return (
    <div>
      <h1>Список пользователей</h1>
      <Link href="/users/create">Создать нового пользователя</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Имя</th>
            <th>Пол</th>
            <th>Дата рождения</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.date_of_birth}</td>
              <td>
                <Link href={`/users/${user.id}`}>Просмотр</Link>
                <Link href={`/users/${user.id}/edit`}>Редактировать</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
