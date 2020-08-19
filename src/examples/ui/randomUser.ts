import * as t from 'runtypes'
import genX from '../../'

export const User = t.Record({
  name: t.Record({
    title: t.String,
    first: t.String,
    last: t.String,
  }),
  picture: t.Record({
    thumbnail: t.String,
  }),
})

export type User = t.Static<typeof User>

export const Response = t.Record({
  results: t.Array(User),
})

export const getUsers = genX(
  (num: number) => fetch(`https://randomuser.me/api/?results=${num}`),
  (resp) => resp.json(),
  (resp) => Response.check(resp),
  ({ results }) => results
)
