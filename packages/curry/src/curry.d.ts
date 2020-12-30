import { F } from 'ts-toolbelt'

declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>

export default curry
