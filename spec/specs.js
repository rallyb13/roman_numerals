describe(romanNumeral, function() {
  it("will add all of the I symbols together", function() {
    expect(romanNumeral(3)).to.equal("III");
  });

  it("will give a roman numeral using V & I", function() {
    expect(romanNumeral(7)).to.equal("VII");
  });

  it("will return a roman numeral pair where the smaller number precedes the larger", function() {
    expect(romanNumeral(4)).to.equal("IV");
  });

  it("will return the roman numeral pair for 9", function() {
    expect(romanNumeral(9)).to.equal("IX");
  });

  // it("will return any roman numeral under one hundred", function(){
  //   expect(romanNumeral(78)).to.equal("LXXVIII");
  // });
});
