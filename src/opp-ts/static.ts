class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }
  static decrement() {
    Counter.count--;
  }
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.count);
