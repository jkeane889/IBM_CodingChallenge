// ----------------------
// Constants
// ----------------------

export const ALL_CHARACTERS = "ALL_CHARACTERS";

// ----------------------
// Actions
// ----------------------

export function getAllCharacters(allCharacters) {
   return { type: ALL_CHARACTERS, allCharacters: allCharacters };
};

export default rootReducer;