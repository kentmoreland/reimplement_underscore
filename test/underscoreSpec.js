expect = require('chai').expect;

describe ('underscore library', () => {
  const _ = require('../underscore');



  describe('_.each', () => {
    let test2, test3;

    beforeEach(() => {
      test2 = [];
      test3 = {};
    });


    let test1 = [1, 2, 3, 4];
    let test1a = {1: 1, 2: 2, 3: 3, 4: 4};
    let dbl = (a) => { test2.push(a * 2); };
    let params = (num, index, collection) => {
      test3.num = num; test3.index = index; test3.collection = collection;
    };

    it('should invoke the callback on each value in an array', () => {
      _.each(test1, dbl);
      expect(test2).to.eql([2, 4, 6, 8]);
    });

    it('should invoke the callback on each value in an object', () => {
      _.each(test1a, dbl);
      expect(test2).to.eql([2, 4, 6, 8]);
    });

    it('should take the index and collection as a parameter to the callback', () => {
      _.each(test1, params);
      expect(test3).to.eql({num: 4, index: 3, collection: [1, 2, 3, 4]});
    });

    it('should take the key and the collection as a parameter to the callback for objects', () => {
      _.each(test1a, params);
      expect(test3).to.eql({num: 4, index: "4", collection: {1: 1, 2: 2, 3: 3, 4: 4}});
    });

  });



});