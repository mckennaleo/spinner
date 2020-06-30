const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const timerDelay = (x) => {
  for (let i = 0; i < x; i++) {
    setTimeout(() => {
      let index = i % spin.length;
      process.stdout.write(spin[index]);
    }, (100 + 100 * i));
  }
};
timerDelay(100);