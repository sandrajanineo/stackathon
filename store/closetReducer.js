import closetInventory from './closetInventory';
// import { tops } from './closetInventory';

let tops = [
  {
    id: 1,
    imageUrl: 'https://www.gap.com/webcontent/0013/463/897/cn13463897.jpg',
    occassion: 'casual',
    season: 'fall',
    color: 'blue',
    category: {
      body: 'top',
      type: 't-shirt',
    },
  },
  {
    id: 2,
    imageUrl:
      'http://www.streetgaga.com/image/catalog/Sweaters/Cardigan-Sweaters/long-sleeve-chunky-knit-pockets-pink-cardigan-13532_0.jpg',
    occassion: 'casual',
    season: 'winter',
    color: 'pink',
    category: {
      body: 'top',
      type: 'sweater',
    },
  },
  {
    id: 3,
    imageUrl:
      'https://images.express.com/is/image/expressfashion/0097_09704455_0528?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
    occassion: 'formal',
    season: 'fall',
    color: 'red',
    category: {
      body: 'top',
      type: 'collared',
    },
  },
];

const GET_TOPS = 'GET_TOPS';
const GET_BOTTOMS = 'GET_BOTTOMS';
const GET_FULLBODY = 'GET_FULLBODY';

const getTops = () => ({
  type: GET_TOPS,
  tops,
});

// const getBottoms = () => ({
//   type: GET_BOTTOMS,
//   bottoms,
// });

let initialState = {
  tops: tops,
  // bottoms,
  // fullBody,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPS:
      return state;
  }
};
