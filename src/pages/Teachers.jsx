import React, { useEffect } from 'react'

import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from '../redux/teachers/TeacherActions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



const Teachers = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);

  const fetchUsers = async () => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get('http://localhost:3000/users');
      const data = await res.data;
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);


  return (
    <div className='teacher'>
      <div className='h1'>
        <h1>Teachers</h1>
        <button>Add</button>
      </div>
      <div className='inputs'>
        <input type="text " placeholder='name' />
        <input type="email " placeholder='email' />
      </div>
      <div className=''>
        <h1>Users</h1>
        {loading ? <h2>Loading...</h2> : null}
        {error ? <h3>{error}</h3> : null}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}
                <h1>{user.email}</h1>
                <button>delete</button>
              </li>

            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default Teachers