function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw new Error("seconds는 0보다 커야 함");
  } else {
    setTimeout(callback, seconds * 1000);
  }
}

runInDelay(() => {
  console.log("타이머 완료");
}, 1);
