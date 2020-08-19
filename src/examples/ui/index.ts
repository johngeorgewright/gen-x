import * as t from 'runtypes'
import genX, { run } from '../../'

const User = t.Record({
  name: t.Record({
    title: t.String,
    first: t.String,
    last: t.String,
  }),
  picture: t.Record({
    thumbnail: t.String,
  }),
})

const Response = t.Record({
  results: t.Array(User),
})

const getUsers = genX(
  (num: number) => fetch(`https://randomuser.me/api/?results=${num}`),
  (resp) => resp.json(),
  (resp) => Response.check(resp),
  ({ results }) => results,
  displayUser
)

const button = document.getElementById('startButton') as HTMLButtonElement
button.addEventListener('click', async () => {
  button.disabled = true
  await run(getUsers, 10)
  button.disabled = false
})

function displayUser(user: t.Static<typeof User>) {
  const template = document.getElementById(
    'userTemplate'
  ) as HTMLTemplateElement
  const cln = template.content.cloneNode(true) as DocumentFragment

  const avatar = cln.getElementById('avatar') as HTMLImageElement
  avatar.src = user.picture.thumbnail

  const name = cln.getElementById('name') as HTMLElement
  name.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`

  const results = document.getElementById('results') as HTMLDivElement
  results.appendChild(cln)
}
