
describe("IBM Challenge One", function(){
  "use strict"

  describe("isDivisible", function(){
    it("should be of type 'function'", function(){
      expect(typeof(isDivisible)).toEqual('function')
    });
  });

  describe("contains", function(){
    it("should be of type 'function'", function(){
      expect(typeof(contains)).toEqual('function')
    });
  });

  describe("Attribute Tests", function(){
    let test1;
    
    function Integers(n, p, q) {
      this.n = n;
      this.p = p;
      this.q = q;
    };

    beforeEach(function() {
      test1 = new Integers(20, 3, 4);
    });

    it("should return a value", function(){
      let sequence1 = isDivisible(test1.n, test1.p, test1.q);
      expect(sequence1).toBeDefined();
    });

    it("returned value should be equal to 'type' Array", function(){
      let sequence1 = isDivisible(test1.n, test1.p, test1.q);
      expect(Array.isArray(sequence1)).toBe(true);
    });
  });

  describe("Edge cases", function(){
    let test2;
    let test3;
    let test4;
    let test5;
    
    function Integers(n, p, q) {
      this.n = n;
      this.p = p;
      this.q = q;
    };

    beforeEach(function() {
      test2 = new Integers(null, 3, 4);
      test3 = new Integers(0, 3, 4);
      test4 = new Integers(5, 3, 4);
      test5 = new Integers(50, 3, 4);
    });

    it("should return null when passed null for 'N' ", () => {
      let sequence2 = isDivisible(test2.n, test2.p, test2.q);
      expect(sequence2).toEqual(null);
    });

    it("should return null when passed falsy for 'N' ", () => {
      let sequence3 = isDivisible(test3.n, test3.p, test3.q);
      expect(sequence3).toEqual(null);
    });

    it("output DOES NOT contain 'WAT' when integer 'N' is not divisible by 'p' ", () => {
      let testWAT = true;
      let sequence4 = isDivisible(test4.n, test4.p, test4.q);
      
      for (let i = 0; i < sequence4.length; i++) {
        if (sequence4[i] === 'WAT') {
          testWAT = false;
        }
      }

      expect(testWAT).toEqual(true);
    });

    it("output DOES NOT contain 'SON' when integer 'N' is not divisible by 'q' ", function(){
      let testSON = true;
      let sequence4 = isDivisible(test4.n, test4.p, test4.q);

      for (let i = 0; i < sequence4.length; i++) {
        if (sequence4[i] === 'SON') {
          testSON = false;
        }
      }

      expect(testSON).toEqual(true);
    });

    it("output DOES NOT contain 'WATSON' when integer 'N' is not divisible by 'p' AND 'q' ", function(){
      let testWATSON = true;
      let sequence4 = isDivisible(test4.n, test4.p, test4.q);

      for (let i = 0; i < sequence4.length; i++) {
        if (sequence4[i] === 'WATSON') {
          testWATSON = false;
        }
      }

      expect(testWATSON).toEqual(true);
    });

    it("output DOES NOT contain 'WAT' when integer 'N' is divisible by 'p' AND contains 'p' ", function(){
      let includeWAT = false;
      let sequence4 = isDivisible(test4.n, test4.p, test4.q);

      for (let i = 0; i < sequence4.length; i++) {
        if (sequence4[i] === 'WAT') {
          includeWAT = true;
        }
      }

      expect(includeWAT).toEqual(false);
    });

    it("output DOES NOT contain 'SON' when integer 'N' is divisible by 'q' AND contains 'q' ", function(){
      let includeSON = false;
      let sequence4 = isDivisible(test4.n, test4.p, test4.q);

      for (let i = 0; i < sequence4.length; i++) {
        if (sequence4[i] === 'SON') {
          includeSON = true;
        }
      }

      expect(includeSON).toEqual(false);
    });
  });

  describe("Input Tests", () => {
    let small1;
    let small2;
    let small3;
    let large;
    
    function Integers(n, p, q) {
      this.n = n;
      this.p = p;
      this.q = q;
    };

    beforeEach(function() {
      small1 = new Integers(5, 3, 4);
      small2 = new Integers(10, 3, 4);
      small3 = new Integers(50, 2, 3);
      large = new Integers(100, 3, 5);
    });

    it("sequence should equal '[1,2,3,4,5]' when N equals 5 ", () => {
      let smallSequence1 = isDivisible(small1.n, small1.p, small1.q);
      expect(smallSequence1).toEqual([1,2,3,4,5]);
    });

    it("sequence should equal '[1,2,3,4,5,'WAT',7,'SON','WAT',10]' when N equals 10 ", () => {
      let smallSequence2 = isDivisible(small2.n, small2.p, small2.q);
      expect(smallSequence2).toEqual([1,2,3,4,5,'WAT',7,'SON','WAT',10]);
    });

    it("sequence should equal '[1,2,3,4,5,'WAT' ... 'WAT',49,50]' when N equals 50 ", () => {
      let smallSequence3 = isDivisible(small3.n, small3.p, small3.q);
      expect(smallSequence3).toEqual([1, 2, 3, "WAT", 5, "WATSON", 7, "WAT", "SON", "WAT", 11, "WATSON", 13, "WAT", "SON", "WAT", 17, "WATSON", 19, "WAT", "SON", "WAT", 23, "WATSON", 25, "WAT", "SON", "WAT", 29, "WATSON", 31, "WAT", "SON", "WAT", 35, "WATSON", 37, "WAT", "SON", "WAT", 41, "WATSON", 43, "WAT", "SON", "WAT", 47, "WATSON", 49, "WAT"]);
    });

    it("sequence should equal '[1,2,3,4,5,'WAT' ... 'WATSON', 97, 98, 'WAT', 'SON']' when N equals 100 ", () => {
      let largeSequence = isDivisible(large.n, large.p, large.q);
      expect(largeSequence).toEqual([1, 2, 3, 4, 5, "WAT", 7, 8, "WAT", "SON", 11, "WAT", 13, 14, "WATSON", 16, 17, "WAT", 19, "SON", "WAT", 22, 23, "WAT", "SON", 26, "WAT", 28, 29, "WATSON", 31, 32, "WAT", 34, "SON", "WAT", 37, 38, "WAT", "SON", 41, "WAT", 43, 44, "WATSON", 46, 47, "WAT", 49, "SON", "WAT", 52, 53, "WAT", "SON", 56, "WAT", 58, 59, "WATSON", 61, 62, "WAT", 64, "SON", "WAT", 67, 68, "WAT", "SON", 71, "WAT", 73, 74, "WATSON", 76, 77, "WAT", 79, "SON", "WAT", 82, 83, "WAT", "SON", 86, "WAT", 88, 89, "WATSON", 91, 92, "WAT", 94, "SON", "WAT", 97, 98, "WAT", "SON"]);
    });
  })
});
