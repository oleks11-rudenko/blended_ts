enum Role {
  Admin,
  User,
  Guest,
}

const getPermissions = (role: Role) => {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];
    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];
  }
};

console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.User));
console.log(getPermissions(Role.Guest));
