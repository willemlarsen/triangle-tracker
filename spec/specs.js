describe('TriangleTracker', function () {
		describe('triangleTest', function () {
			it('returns a boolean if a given potential triangle would work', function() {
				triangleTest(3, 3, 3).should.equal(true);
				triangleTest(3, 3, 7).should.equal(false);
			});
		});
});