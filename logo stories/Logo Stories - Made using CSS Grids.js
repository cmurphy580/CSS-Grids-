const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five'); 
const six = document.querySelector('.six'); 
const seven = document.querySelector('.seven');

const info = {
  one: {name: 'Toyota', logo:'toyota-logo.png', description:'The three ellipses seen in the logo for Toyota represent three hearts: the heart of the customer, the heart of the product, and the heart of progress in the field of technology'}, 
  two: {name: 'BMW', logo:'bmw-logo.png', description:'BMW has a history in aviation and its logo stays true to its roots. The blue and white represent a propeller in motion with the sky peeking through. In fact, BMW had a role in World War II as a creator of aircraft engines for the German military.'},
  three: {name: 'Mobil', logo:'Mobil-logo.png', description:'The importance of this logo is in its colors. The red is said to represent strength and the blue represents faithfulness and security that the company provides.'},
  four: {name: 'Adidas', logo:'adidas-logo.png', description:'The Adidas logo looks like a mountain to represent the obstacles that people need to overcome. Originally the logo was just three stripes and didn’t stand for anything. So they kept the three stripes and just made them slanted to resemble a mountain.'}, 
  five: {name: 'Apple', logo:'apple-logo.png', description:'The Apple logo represents the forbidden fruit from the “Tree of Knowledge” in the Biblical creation story of Adam and Eve.'}, 
  six: {name: 'FedEx', logo:'fedex-logo.png', description:'This logo is so creative. If you look closely you will see the arrow between the letter ‘E’ and ‘X’, which represents the company’s forward thinking ways and outlook towards the future.'}, 
  seven: {name: 'McDonald\'s', logo:'Mcdonalds-logo.png', description:'Yes, the “M” for McDonald’s and there really isn’t another meaning. In the 60’s, McDonald’s wanted to change the logo but their design consultant and psychologist Louis Cheskin insisted that they left the golden arches. According to BBC, he said customers will unconsciously recognize the logo as “symbolism of a pair of nourishing breasts.” Whether this is true or not, their logo is one of the most recognizable in the world.'}
};

one.innerHTML = `
  <h1>${info.one.name}</h1>
  <img src=${info.one.logo}></img>
  <hr>
  <p>${info.one.description}</p>
`;
two.innerHTML = `
  <h1>${info.two.name}</h1>
  <img src=${info.two.logo}></img>
  <hr>
  <p>${info.two.description}</p>
`;
three.innerHTML = `
  <h1>${info.three.name}</h1>
  <img src=${info.three.logo}></img>
  <hr>
  <p>${info.three.description}</p>
`;
four.innerHTML = `
  <h1>${info.four.name}</h1>
  <img src=${info.four.logo}></img>
  <hr>
  <p>${info.four.description}</p>
`;
five.innerHTML = `
  <h1>${info.five.name}</h1>
  <img src=${info.five.logo}></img>
  <hr>
  <p>${info.five.description}</p>
`;
six.innerHTML = `
  <h1>${info.six.name}</h1>
  <img src=${info.six.logo}></img>
  <hr>
  <p>${info.six.description}</p>
`;
seven.innerHTML = `
  <h1>${info.seven.name}</h1>
  <img src=${info.seven.logo}></img>
  <hr>
  <p>${info.seven.description}</p>
`;

