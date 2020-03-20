describe('Mock', () => {
let whatever;
  beforeEach(() => {
    whatever = jest.mock('./util', () => ({
      sum: (a, b) => a - b,
      subtract: (a, b) => a + b
    }));
  })

  afterEach(()=> {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  it('should mock', () => {
    // given

    const mock = require('./index');

    // when
    const [sum, sub] = mock(1, 2);


    //then
    expect(sum).toBe(-1);
    expect(sub).toBe(3);
  })

  it('should just work', () => {
    const mock = require('./index');

    const [sum, sub] = mock(1, 2);

    expect(sum).toBe(3);
    expect(sub).toBe(-1);
  })


})
