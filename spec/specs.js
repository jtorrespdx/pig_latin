
describe('pigLatin', function() {
    it("adds ay to words starting with a vowel", function(){
        expect(pigLatin("i")).to.equal("iay");
    });

    it("if a word begins with a consanant, it moves the first letter to the end and adds ay", function(){
        expect(pigLatin("taco")).to.equal("acotay");
    });

    it("if a word begins with two consanants, it moves the first two letters to the end and adds ay", function() {
        expect(pigLatin("plural")).to.equal("uralplay");
    });
});
