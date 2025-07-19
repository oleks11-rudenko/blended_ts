interface City {
  city: string;
}

interface User {
  name: string;
  address?: City;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
