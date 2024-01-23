class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // Generates a random hex ID
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // Generates a random hex ID
    this.name = name;
    this.calories = calories;
  }
}

export { Meal, Workout };
