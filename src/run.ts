export default async function run(genX: () => AsyncGenerator): Promise<void>

export default async function run<A extends any>(
  genX: (arg: A) => AsyncGenerator,
  arg: A
): Promise<void>

export default async function run<A extends any>(
  genX: (arg?: A) => AsyncGenerator,
  arg?: A
) {
  for await (const _i of genX(arg)) {
  }
}
