export default async function run(genX: () => AsyncGenerator): Promise<void>

export default async function run<A>(
  genX: (arg: A) => AsyncGenerator,
  arg: A
): Promise<void>

export default async function run<A>(
  genX: (arg?: A) => AsyncGenerator,
  arg?: A
) {
  for await (const _ of genX(arg)) {
  }
}
