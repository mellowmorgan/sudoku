describe('Game', () => {

  test('', () => {
    const game = new Game([[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]);
    expect(game.colArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.rowArray).toEqual([[1,2,3],[1,2,3]]);
    expect(game.boxArray).toEqual([[1,2,3],[1,2,3]]);
  });
});
