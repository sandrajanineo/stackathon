import closetInventory from './ClosetInventory';
import { tops } from './ClosetInventory';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPS:
      return state.tops;
  }
};

export default reducer;
