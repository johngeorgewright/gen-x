import React from 'react'
import * as t from 'runtypes'
import { User } from './randomUser'

export interface UserProps {
  user: t.Static<typeof User>
}

export default function UserC({ user }: UserProps) {
  return (
    <figure>
      <img src={user.picture.thumbnail} />
      <figcaption>
        {user.name.title} {user.name.first} {user.name.last}
      </figcaption>
    </figure>
  )
}
