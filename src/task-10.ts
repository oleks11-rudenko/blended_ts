interface User {
  id: number;
  name: string;
}

const users: string[] = ["alice", "bob", "charlie"];

function toUserObjects(users: string[]): User[] {
  return users.map((user: string, index: number) => ({
    id: index + 1,
    name: user,
  }));
}

console.log(toUserObjects(users));
