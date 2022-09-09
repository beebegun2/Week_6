var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#startGame', function() {
        it('should split the deck into half', function() {
            var Deck = startGame(26, 26)
            expect(Deck).to.equal('26');
        });

        it('should throw an error if deck did not split', function() {
            expect(function() {
                startGame(26, 28);
            }).to.throw(Error);
        });
    });
});