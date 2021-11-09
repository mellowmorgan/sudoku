import { Game } from './../src/game.js';

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game([[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]);
  });
  test('Should create game object with 3 arrays as the properties', () => {
    game = new Game([[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]);
    expect(game.colArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.rowArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.boxArray).toEqual([[1,2,3],[1,2,3]]);
  });
  test('Should return whether user input is "legal" or not', () => {
    const legal =  game.isLegal();
    expect(legal).toEqual(true);
  });
});