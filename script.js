/* Add any JavaScript you need to this file. */
/*Name: Tahsin Rahman
Student ID: 165063199
Email: trahman31@myseneca.ca
Date: December 8,2020*/
// eslint-disable-next-line no-unused-vars
//store-items
var storeItems = [
  {
    Name: 'Blue Sky Flower Vase',
    Description:
      'Self coloured glass bottle vase. Painting material consists of shades of blue and white acrylic paint with top-notch quality.',
    Price: 49.99,
    Category: 'Vases',
    Image: 'IMG_9711.JPG'
  },
  {
    Name: 'Mountain Painting Set',
    Description:
      'Mountain painting set of 2 canvases. Blue and Orange shade, detail mountain paintings for home decoration. Size: 12x18',
    Price: 79.99,
    Category: 'Paintings',
    Image: 'IMG_9716.JPG'
  },
  {
    Name: 'Money Plant',
    Description:
      'Money Plant. Get this money plant including the pot! Add $20 more to get the with the pot. Indoor plants only.',
    Price: 19.99,
    Category: 'Plants',
    Image: 'IMG_9718.JPG'
  },
  {
    Name: 'Anthurium Plant',
    Description: 'White Anthurium indoor plant. Medium sized indoor plants for home decoration.',
    Price: 29.99,
    Category: 'Plants',
    Image: 'anthu.jpg'
  },
  {
    Name: 'Abstract Painting Set',
    Description:
      'A set of two abstract paintings for home decoration. Detailed work on the canvases. Size: 10x20',
    Price: 120.99,
    Category: 'Paintings',
    Image: '2set.jpg'
  },
  {
    Name: 'Resin Cactus',
    Description:
      'Artificial set of resin cactuses for home decoration. Three types of mini cactuses.',
    Price: 29.99,
    Category: 'Plants',
    Image: 'cactus.jpg'
  },

  {
    Name: 'Flower Vase',
    Description:
      'A medium sized flower vase with artificial flowers. For customizing your own colour of flowers, send an email!',
    Price: 89.99,
    Category: 'Vases',
    Image: 'IMG_9723.JPG'
  },
  {
    Name: 'Green Mountain Painting',
    Description:
      'A very detailed art work of the mountain with water. Painting materials are acrylic. Aesthetic wall decor item.',
    Price: 74.99,
    Category: 'Paintings',
    Image: 'mountain.jpg'
  },
  {
    Name: 'Artificial Succulent',
    Description:
      'Artificial succulent inside a glass bowl for home decoration. To get more options and check if it is stock, send an email! ',
    Price: 10.99,
    Category: 'Vases',
    Image: 'IMG_9714.JPG'
  },
  {
    Name: 'Led Lights',
    Description:
      'Small and cute led lights, a set of three. Different colours available, sent an email! Suitable as table lamps.',
    Price: 49.99,
    Category: 'Lights',
    Image: 'light.jpg'
  },
  {
    Name: 'Moonlit Night',
    Description:
      'Moonlit night painting with acrylic colours and detailed work on the moon. Size: 8x10',
    Price: 79.99,
    Category: 'Paintings',
    Image: 'moon.jpg'
  },
  {
    Name: 'Blue Mountain Lamp',
    Description:
      'Artistic blue mountain lamp. Blue light with mountain and stars. Included free batteries!',
    Price: 79.99,
    Category: 'Lights',
    Image: 'lighlamp.jpg'
  },
  {
    Name: 'Pink Mermaid Cushion',
    Description:
      'Pink mermaid glitter cushion, cotton material cloth for sofa, bed and etc home decoration.',
    Price: 19.99,
    Category: 'Cushions',
    Image: 'mermaid.jpeg'
  },
  {
    Name: 'Pencil Led Light',
    Description:
      'Pencil shaped green led light for room decor. Only works while plugged in. USB cable included.',
    Price: 34.99,
    Category: 'Lights',
    Image: 'greenlight.jpeg'
  },
  {
    Name: 'Flower Cushion',
    Description:
      'Multi-colored design flower and leaves cushion for sofa, bed and etc home decoration.',
    Price: 19.99,
    Category: 'Cushions',
    Image: 'cushion.jpeg'
  }
];

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//menu of the items and home
window.onload = function() {
  setListing(storeItems);
  document.querySelector('#home').onclick = home;
  document.querySelector('#vases').onclick = vases;
  document.querySelector('#paintings').onclick = Paintings;
  document.querySelector('#plants').onclick = plants;
  document.querySelector('#lights').onclick = lights;
  document.querySelector('#cushions').onclick = cushions;
};
//listing the items
function setListing(items) {
  // get reference to listings
  var listings = document.querySelector('#listings');
  // remove all items within the listings
  while (listings.firstChild) {
    listings.removeChild(listings.firstChild);
  }
  // creates all rows for data
  var row = null;
  for (var i = 0; i < items.length; i++) {
    // create row for every 3 items
    if (i % 3 === 0) {
      row = document.createElement('div');
      row.className = 'row';
    }
    // create a card and append into row
    row.appendChild(createCard(items[i]));
    // add the row to the end of the table body
    if (i % 3 === 2 || i + 1 === items.length) {
      listings.appendChild(row);
    }
  }
}
// creates a card from item data
function createCard(item) {
  var card = createElementWithClass('div', 'card');
  var image = createElementWithClass('div', 'card-image');
  image.style.backgroundImage = 'url(images/' + item.Image + ')';
  card.appendChild(image);

  var content = createElementWithClass('div', 'card-content');

  var name = createElementWithClass('p', 'card-name');
  name.appendChild(document.createTextNode(item.Name));
  content.appendChild(name);

  var description = createElementWithClass('p', 'card-description');
  description.appendChild(document.createTextNode(item.Description));
  content.appendChild(description);

  var price = createElementWithClass('p', 'card-price');
  price.appendChild(document.createTextNode('$' + item.Price));
  content.appendChild(price);

  var button = createElementWithClass('p', 'card-button');
  button.appendChild(document.createTextNode('Add to Cart'));
  content.appendChild(button);

  card.appendChild(content);
  return card;
}
// creates element with class
function createElementWithClass(elementType, className) {
  var element = document.createElement(elementType);
  element.className = className;
  return element;
}
// sets the subtitle
function setSubtitle(text) {
  document.querySelector('#subtitle').textContent = text;
}
function Paintings() {
  setSubtitle('Paintings');
  var filterPaintings = storeItems.filter(function(c) {
    return c.Category === 'Paintings';
  });
  setListing(filterPaintings);
}

function vases() {
  setSubtitle('Vases');
  var filterVases = storeItems.filter(function(c) {
    return c.Category === 'Vases';
  });
  setListing(filterVases);
}

function plants() {
  setSubtitle('Plants');
  var filterPlants = storeItems.filter(function(c) {
    return c.Category === 'Plants';
  });
  setListing(filterPlants);
}

function lights() {
  setSubtitle('Lights');
  var filterLights = storeItems.filter(function(c) {
    return c.Category === 'Lights';
  });
  setListing(filterLights);
}
function cushions() {
  setSubtitle('Cushions');
  var filterCushions = storeItems.filter(function(c) {
    return c.Category === 'Cushions';
  });
  setListing(filterCushions);
}

function home() {
  setSubtitle('Home');
  setListing(storeItems);
}

//for contact.html
//if it is order-problem, this will show the input box to enter the order number
function showhide() {
  var orderproblem = document.getElementById('orderproblem');
  var text = document.getElementById('text');
  text.style.display = orderproblem.checked ? 'block' : 'none';
}
