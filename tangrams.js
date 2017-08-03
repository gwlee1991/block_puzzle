document.addEventListener("DOMContentLoaded", function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height * 0.8
  });

  const sqrt = Math.sqrt(2);

  const layer = new Konva.Layer();
  const startX = stage.getWidth() / 2 - 50;
  const startY = stage.getHeight() / 2 - 25;
  const shape = [];


  const triangle1 = new Konva.Line({
    points: [0, 0, 300, 0, 150, 150],
    x: 100,
    y: 100,
    fill: '#FF9900',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true,
  });
  shape.push(triangle1);

  const triangle2 = new Konva.Line({
    points: [0, 0, 0, 300, 150, 150],
    x: 100,
    y: 100,
    fill: '#269B7E',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  });
  shape.push(triangle2);

  const square = new Konva.Line({
    points: [0, 0, 75, 75, 150, 0, 75, -75],
    x: 250,
    y: 250,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  });
  shape.push(square);

  const triangle3 = new Konva.Line({
    points: [0, 0, 75, 75, 75, -75],
    x: 325,
    y: 175,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  });
  shape.push(triangle3);

  const triangle4 = new Konva.Line({
    points: [0, 0, 150, 0, 150, -150],
    x: 250,
    y: 400,
    fill: 'violet',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  });
  shape.push(triangle4);

  const triangle5 = new Konva.Line({
    points: [0, 0, 75, 75, -75, 75],
    x: 250,
    y: 250,
    fill: 'indigo',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  });
  shape.push(triangle5);

  const rect = new Konva.Line({
    points: [0, 0, 150, 0, 225, -75, 75, -75],
    x: 100,
    y: 400,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
    draggable: true
  })
  shape.push(rect);
  console.log(rect.points);
  window.rect = rect;

  shape.forEach(el => {
    el.on("click", function () {
      el.rotate(45);
      layer.draw();
    })
  })

  $('button#rabbit').on("click", function () {
    const fills = [];
    const fill1 = new Konva.Line({
      points: [0, 0, 150 * sqrt, 0, 150 * sqrt, -150 * sqrt],
      x: 550,
      y: 380,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false,
    });
    fills.push(fill1);

    const fill2 = new Konva.Line({
      points: [0, 0, 150 * sqrt, 0, 0, 150 * sqrt],
      x: 550,
      y: 380,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    });
    fills.push(fill2);

    const fill3 = new Konva.Line({
      points: [0, 0, 75 * sqrt, 0, 75 * sqrt, -75 * sqrt, 0, -75 * sqrt],
      x: 550 + 150 * sqrt,
      y: 380 - 150,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    });
    fills.push(fill3);

    const fill4 = new Konva.Line({
      points: [0, 0, 75, 75, 0, 150],
      x: 550 + 150 * sqrt,
      y: 380 - 75 * sqrt,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    });
    fills.push(fill4);

    const fill5 = new Konva.Line({
      points: [0, 0, 150, 0, 150, -150],
      x: 550,
      y: 380 + 150 * sqrt,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    });
    fills.push(fill5);

    const fill6 = new Konva.Line({
      points: [0, 0, 75, -75, 0, -150],
      x: 550 + 150,
      y: 380 + 150 * sqrt,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    });
    fills.push(fill6);

    const fill7 = new Konva.Line({
      points: [0, 0, -75 * sqrt, 0, -150 * sqrt, -75 * sqrt, -150 * sqrt + 75 * sqrt, -75 * sqrt],
      x: 550 + 250,
      y: 380 - 150 - 75 * sqrt,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 1,
      closed: true,
      draggable: false
    })
    fills.push(fill7);


    layer.add(fill1);
    layer.add(fill2);
    layer.add(fill3);
    layer.add(fill4);
    layer.add(fill5);
    layer.add(fill6);
    layer.add(fill7);
    stage.add(layer);
    fills.forEach(fill => {
      fill.moveToBottom();
    })
    layer.draw();
  });

  layer.add(triangle1);
  layer.add(triangle2);
  layer.add(triangle3);
  layer.add(triangle4);
  layer.add(triangle5);
  layer.add(square);
  layer.add(rect);
  stage.add(layer);
  layer.draw();


  const reset = document.getElementById('reset');
  reset.addEventListener("click", function () {
    window.location.reload(true);
  })
})
