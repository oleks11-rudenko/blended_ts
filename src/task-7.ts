interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

console.log(users);

users.push({ name: "Mango", age: 20 });
// users.push({ age: 15 });
// users.push({ name: "Poly"});
