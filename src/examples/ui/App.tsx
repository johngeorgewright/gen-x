import React, { useCallback, useState } from 'react'
import type { User } from './randomUser'
import { getUsers } from './randomUser'
import UserC from './UserC'

export default function App() {
  const [users, setUsers] = useState<User[]>([])

  const populate = useCallback(async () => {
    const users: User[] = []

    for await (const user of getUsers(10)) {
      users.push(user)
    }

    setUsers(users)
  }, [setUsers])

  return (
    <>
      <button onClick={populate}>Start</button>
      {users.map((user, key) => (
        <UserC key={key} user={user} />
      ))}
    </>
  )
}
