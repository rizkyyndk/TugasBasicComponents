import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    {id: 1, name: 'Rizky', email: 'rizky@gmail.com'},
    {id: 2, name: 'Andika', email: 'andika@gmail.com'}
  ]);

  const addUser = (user) => {
    setUsers([...users, {...user, id:user.length + 1}]);
  };

  return (
    <div className="App">
      <Header title="User Management App" />
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
