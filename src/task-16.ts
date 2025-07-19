interface Profile {
  username: string;
  age: number;
  isAdmin: boolean;
}

function fetchProfile(): Promise<Profile> {
  return new Promise<Profile>(resolve => {
    setTimeout(() => {
      resolve({ username: "max_123", age: 28, isAdmin: true });
    }, 1000);
  });
}

fetchProfile().then((profile: Profile) => console.log(profile));
