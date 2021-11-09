import { Game } from './../src/game.js';
describe('Game', () => {

  test('Should create game object with 3 arrays as the properties', () => {
    const game = new Game([[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]);
    expect(game.colArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.rowArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.boxArray).toEqual([[1,2,3],[1,2,3]]);
  });
});
