describe('Request', function () {

    it('jsdom', (jCallback) => {
      const callback = () => { console.log('Called callback'); jCallback()};
      const request = require('./index');

      const result = request(callback);
      console.log(result)

      expect(result).not.toBeInstanceOf(Promise);
    })
})
