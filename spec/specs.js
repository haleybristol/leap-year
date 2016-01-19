describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });

  it("is false for years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

 it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });

  it("is false for years that are words, not numbers", function() {
     expect(leapYear("this")).to.equal(false);
   });

   it("is false for negative numbers entered for year", function() {
      expect(leapYear(-1)).to.equal(false);
    });

    it("is false for empty strings for year", function() {
       expect(leapYear(parseInt(""))).to.equal(false);
     });

});
