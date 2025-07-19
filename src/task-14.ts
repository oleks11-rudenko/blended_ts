function fetchMessage(): Promise<string> {
  return new Promise<string>(resolve => {
    resolve("Hello from server!");
  });
}

fetchMessage().then((message: string) => console.log(message));
// fetchMessage().then((message: number) => console.log(message));
