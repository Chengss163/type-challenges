interface Person {
  name: string,
  age: number,
}
type K1 = keyof Person;

const a:K1 ="age";


