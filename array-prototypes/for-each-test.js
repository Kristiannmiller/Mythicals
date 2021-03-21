var assert = require('chai').assert;

describe('For Each', function () {

  it('should capitalize each string in the array', function () {
    var favoriteColors = [
      'Red',
      'Green',
      'Blue',
      'Yellow'
    ];

    favoriteColors.forEach((color, i) => favoriteColors[i] = color.toUpperCase())

    assert.deepEqual(favoriteColors, ['RED', 'GREEN', 'BLUE', 'YELLOW']);
  });
});
