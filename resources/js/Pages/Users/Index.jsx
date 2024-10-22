import React from 'react';
import { Link, useForm } from '@inertiajs/react';

const Index = ({ users }) => {
  const { delete: destroy } = useForm();

  const handleDelete = (id) => {
    const confirmation = confirm('Вы уверены, что хотите удалить этого пользователя?');
  
    if (confirmation) {
      destroy(`/users/${id}`, {
        method: 'delete',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
        onSuccess: (response) => {
          window.location.href = response.props.redirect;
        }
      });
      
    }
  };

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
                <Link href={`/users/${user.id}/edit`}>Редактировать</Link> | {' '}
                <Link href={`/users/${user.id}`}>Просмотреть</Link> | {' '}
                <button onClick={() => handleDelete(user.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
