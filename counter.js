const counter = {
  value: 0, // значение счетчика

  reset: function () {
    return this.value = 0
    // обнулить счетчик
  },

  increment: function () {
    return this.value++
    // увеличение на 1
  },

  incrementBy: function (amount) {
    return this.value += amount
    // увеличение на значение аргумента
  },

  decrement: function () {
    return this.value--
    // уменьшить на единицу
  },

  reset: function () {
    this.value = 0;
  },

  print: function () {
    console.log(`Значение счетчика: ${this.value}`);
  }
};

counter.print(); // 0

counter.increment();
counter.increment();

counter.print(); // 2

counter.decrement();

counter.print(); // 1

counter.incrementBy(5);

counter.print(); // 6

counter.reset();

counter.print(); // 0
