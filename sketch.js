let counter = 0;
let imgs = [];
let currentIndex = 0;
let imgWidth;
let imgHeight;
let spacing = 50;
let totalWidth;
let blackhole, mss, nebula, supermassive, supernova;
let displayCounter = 0; // Counter to keep track of displayNextImage calls
let input;
let userLine;
let answers = [];
let response;
let specimenData = null; // Variable to hold the fetched specimen data

function preload() {
  blackhole = loadImage('images/blackhole.png');
  mss = loadImage('images/mss.png');
  nebula = loadImage('images/nebula.png');
  supermassive = loadImage('images/supermassive.png');
  supernova = loadImage('images/supernova.png');

  imgs.push(nebula);
  imgs.push(mss);
  imgs.push(supermassive);
  imgs.push(blackhole);
  imgs.push(supernova);
}

function StarSurprise() {
  resetCanvas();
  userLine = input.value(); //define userLine at top//
  input.value(''); //clears input box//
  answers.push(userLine);
  StarLoop();

  let words = RiTa.tokenize(userLine); //creates an array from the inputs//
  response = ''; //clears input, define response variable at top//

  for (let x = 0; x < words.length; x++) {
    let word = words[x];
    if (RiTa.isVerb(word)) {
      image(nebula, windowWidth / 2, windowHeight / 2, imgWidth, imgHeight);
    } else if (RiTa.isNoun(word)) {
      image(mss, windowWidth / 2, windowHeight / 2, imgWidth, imgHeight);
    } else if (RiTa.isAdverb(word)) {
      image(blackhole, windowWidth / 2, windowHeight / 2, imgWidth, imgHeight);
    } else if (RiTa.isAdjective(word)) {
      image(supernova, windowWidth / 2, windowHeight / 2, imgWidth, imgHeight);
    } else if (RiTa.isStopWord(word)) {
      image(supermassive, windowWidth / 2, windowHeight / 2, imgWidth, imgHeight);
    } else {
      resetCanvas();
      fill(255);
      textFont('Georgia');
      textSize(24);
      textAlign(CENTER);
      text("Please enter a valid word", windowWidth / 2, windowHeight / 2);
    }
  }

  // Fetch new specimen data from the API each time
  loadJSON('https://search.idigbio.org/v2/search/records/?rq={"data.dwc:dynamicProperties":"nsf_tcn"}&limit=10', displaySpecimenData);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 12, 41);
  frameRate(3);
  
  imageMode(CENTER);
  imgWidth = windowWidth / 3;  //width of each image in relation to window size
  imgHeight = imgWidth; // creates symmetrical images

  input = createInput();
  input.position(20, 50);
  greeting = createElement('h3', 'Type a word for a Starry Surprise');
  greeting.style('color', 'white');
  greeting.position(input.x, input.y - 45);

  let enter = createButton('ENTER');
  enter.position(input.x, input.y + 22);
  enter.mousePressed(StarSurprise);
}

function resetCanvas() {
  background(22, 12, 41);
}

function StarLoop() {
  countInterval = setInterval(drawStar, 10);
}

function drawStar() { //this will draw the stars randomly
  drawStarShape(random(0, windowWidth), random(0, windowHeight), 5, 4, 2, 0);
  counter++;
  if (counter >= 150) {
    clearInterval(countInterval);
    counter = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(22, 12, 41);
}

function drawStarShape(x, y, n, outerRadius, innerRadius, rotation) { //this is just the formula to create a star shape
  noStroke();
  fill(190);
  let theta = TAU / n;
  beginShape();
  for (let i = 0; i < n; i++) {
    let x1 = x + cos(i * theta + rotation) * outerRadius;
    let y1 = y + sin(i * theta + rotation) * outerRadius;
    vertex(x1, y1);
    let x2 = x + cos((i + 0.5) * theta + rotation) * innerRadius;
    let y2 = y + sin((i + 0.5) * theta + rotation) * innerRadius;
    vertex(x2, y2);
  }
  endShape(CLOSE);
}

function displaySpecimenData(data) {
  specimenData = data;
  console.log(data); // Log the data for debugging
  displayData();
}

function displayData() {
  if (specimenData && specimenData.items.length > 0) {
    // Pick a random specimen from the fetched data
    let randomIndex = Math.floor(Math.random() * specimenData.items.length);
    let specimen = specimenData.items[randomIndex].data;
    let displayText = '';

    // Extract relevant specimen data
    if (specimen['dwc:scientificName']) {
      displayText += 'Scientific Name: ' + specimen['dwc:scientificName'] + '\n';
    }
    if (specimen['dwc:family']) {
      displayText += 'Family: ' + specimen['dwc:family'] + '\n';
    }
    if (specimen['dwc:genus']) {
      displayText += 'Genus: ' + specimen['dwc:genus'] + '\n';
    }
    if (specimen['dwc:locality']) {
      displayText += 'Locality: ' + specimen['dwc:locality'] + '\n';
    }
    if (specimen['dwc:recordedBy']) {
      displayText += 'Recorded By: ' + specimen['dwc:recordedBy'] + '\n';
    }

    // Display the text on the canvas
    fill(255);
    textFont('Georgia');
    textSize(18);
    textAlign(LEFT);
    text(displayText, 20, windowHeight - 150); // Display at bottom-left of the window
  }
}
