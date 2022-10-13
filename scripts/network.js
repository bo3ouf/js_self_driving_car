class Level {
  // - Neural Network Level
  // - This level is a neural network that learns to play the game
  // - It is a simple feed forward neural network with 2 hidden layers
  // - The first hidden layer has 4 neurons
  // - The second hidden layer has 2 neurons
  // - The output layer has 2 neurons
  // - The first output neuron is the acceleration
  // - The second output neuron is the steering
  // - The inputs are the distance to the car in front,
  //   the distance to the car behind, the distance to the left lane,
  //   and the distance to the right lane
  // - The outputs are the acceleration and steering
  // - The biases are the same for each neuron
  // - The weights are the same for each neuron

  constructor(inputCount, outputCount) {
    this.inputs = new Array(inputCount);
    this.outputs = new Array(outputCount);
    this.biases = new Array(outputCount);
    this.weights = [];
    for (let i = 0; i < inputCount; i++) {
      this.weights[i] = new Array(outputCount);
    }
    Level.#randomize(this);
  }

  static #randomize(level) {
    for (let i = 0; i < level.inputs.length; i++) {
      for (let j = 0; j < level.outputs.length; j++) {
        level.weights[i][j] = Math.random() * 2 - 1;
      }
    }
    for (let i = 0; i < level.biases.length; i++) {
      level.biases[i] = Math.random() * 2 - 1;
    }
  }

  static #sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }
}
