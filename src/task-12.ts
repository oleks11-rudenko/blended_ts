function sendDoneStatus(callback: (status: string) => void) {
  callback("done");
}

sendDoneStatus((status: string) => console.log("status:", status));
