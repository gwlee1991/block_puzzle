# Tangrams_lite

Tangrams Lite is a simple puzzle where the user is able to drag and drop puzzle pieces to create new models. A template has been provided as an example to give users insight as to what they are capable of.

## Features

* Drag and drop pieces
* Click to rotate piece
* Be able to see demo by clicking on the "DEMO" button
* Able to reset the pieces to original position
* Able to click existing templates for ideas
* Link to wikipedia's page on Tangrams for people who are not sure what Tangrams are.


![landingpage](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501867690/Screen_Shot_2017-08-04_at_10.27.54_jeuglq.png)

### Easy to use interface
By using gif for a demo, it is clear for the users as to what they are supposed to do. Also, by using a modal, there's no need for users to navigate to a different page or read long texts.
The reset button allows users to move the blocks to the originial position without having to do it manually or refresh the page.

### Easy to follow templates

Templates have been provided to users so that they can easily follow and learn about the user interface. It will be rendered when clicked on the `rabbit` button at the bottom.

![rabbit template](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501872174/Screen_Shot_2017-08-04_at_11.42.38_fdzfpw.png)


## Technology

This project was only built on HTML/CSS/Javascript.
`jquery` was used for simply query searches throughout the DOM. `konvajs` was used to draw the all the puzzle pieces and the templates.

Below is a code snipit of using konva to draw one of the pieces.

```javascript
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
```

### Plans for the future
Due to the limitation of time, only one sample template was provided to the user. In the future, I plan on provided more templates. Also, currently the puzzles are able to stack on top of each other. However, I would like to work on it so that it does not allow stacking. The puzzles should be able to snap to the closest adjacent side if they overlap.