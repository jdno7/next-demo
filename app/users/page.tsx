import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        // caching options with nextjs when using fetch
        cache: 'no-store'

        // refresh every 10 seconds
        // next: {revalidate: 10}
    })
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(users => <li key={users.id}>{users.name}</li>)}
        </ul>
    </>
    
  )
}

export default UsersPage