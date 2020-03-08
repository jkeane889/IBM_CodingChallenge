import { ALL_CHARACTERS } from '../actions';

export default function getAllCharacters(state = {}, action) {
   switch (action.type) {
      case ALL_CHARACTERS:
         return action.payload;
      default:
         return state;
   }
}