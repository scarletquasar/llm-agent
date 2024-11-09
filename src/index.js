import * as tf from '@tensorflow/tfjs';
// Define input, which has a size of 5 (not including batch dimension).
const input = tf.input({shape: [1]});

// First dense layer uses relu activation.
const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu'});
// Second dense layer uses softmax activation.
const denseLayer2 = tf.layers.dense({units: 1, activation: 'softmax'});

// Obtain the output symbolic tensor by applying the layers on the input.
const output = denseLayer2.apply(denseLayer1.apply(input));

// Create the model based on the inputs.
const model = tf.model({inputs: input, outputs: output});

// The model can be used for training, evaluation and prediction.
// For example, the following line runs prediction with the model on
// some fake data.

const modelInput = tf.tensor([[2]]);
modelInput.print()
model.predict(modelInput).data().then(console.log);