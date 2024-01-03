class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  makeNoise() {
    console.log(this.modelName + ": 빵!!!");
  }

  printModelYear() {
    console.log(this.modelName + "은" + this.modelYear + "입니다");
  }
}

const car_1 = new Car("Genesis", "2023", "e", "5000");

car_1.makeNoise();
car_1.printModelYear();
