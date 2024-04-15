export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const SEARCH_LEFT = 'SEARCH_LEFT';
export const SEARCH_RIGHT = 'SEARCH_RIGHT';

export const moveLeft = (items) => ({
  type: MOVE_LEFT,
  payload: items,
});

export const moveRight = (items) => ({
  type: MOVE_RIGHT,
  payload: items,
});

export const searchLeft = (text) => ({
  type: SEARCH_LEFT,
  payload: text,
});

export const searchRight = (text) => ({
  type: SEARCH_RIGHT,
  payload: text,
});
