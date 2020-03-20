describe('Second Mock', () => {
  it('should mock', () => {
    // given
    jest.mock('./util', () => ({
      sum: (a, b) => a - b,
      subtract: (a, b) => a + b
    }));
    const mock = require('./index');

    // when
    const [sum, sub] = mock(1, 2);


    //then
    expect(sum).toBe(-1);
    expect(sub).toBe(3);
  })
})
