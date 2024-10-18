// resources/js/Pages/Users/Index.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ users }) => {
  

  const handleDelete = (id) => {
    const confirmation = confirm('Вы уверены, что хотите удалить этого пользователя?');
    
    if (confirmation) {
      Inertia.delete(`/users/${id}`, {
        onSuccess: () => {
          alert('Пользователь успешно удалён');
          window.location.reload();
        },
        onError: (errors) => {
          console.error(errors);
          alert('Произошла ошибка при удалении пользователя');
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
                <button onClick={() => handleDelete(user.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;