class Counter {
  value = 0;
  constructor(value) {
    value < 0 ? (this.value = 0) : (this.value = value);
  }
  increase() {
    this.value++;
  }
}

let counter = new Counter(1);
console.log(counter.value);
counter.increase();
console.log(counter.value);
