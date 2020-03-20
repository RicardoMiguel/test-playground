describe('Bail Second attempt', function () {
  beforeAll(()=> console.log(2222222222222))

  it('should pass', function () {
    expect(undefined).toBe(undefined);
  })

  it('should fail', function () {
    expect(undefined).toBe(null);
  })

  it('should not reach here', function () {
    console.log('...but it does')
    expect(undefined).toBe(null);
  })
})
