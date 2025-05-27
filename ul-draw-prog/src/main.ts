import Konva from 'konva';

// Create a stage
var stage = new Konva.Stage({
  container: 'container', // Replace with the ID of your HTML container
  width: 500,
  height: 500
});

// Create a layer
var layer = new Konva.Layer();

// Create a rectangle

var rect = new Konva.Rect({
  x: 20,
  y: 20,
  width: 100,
  height: 100,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

layer.add(rect);

// Add the layer to the stage
stage.add(layer);
