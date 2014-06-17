describe('TriangleTracker', function () {
		describe('triangleTest', function () {
			it('returns a boolean if a given potential triangle would work', function() {
				var exampleTriangleOne = Object.create(TriangleTracker);
					exampleTriangleOne.sideA = 3;
					exampleTriangleOne.sideB = 3;
					exampleTriangleOne.sideC = 3;
					exampleTriangleOne.triangleTest().should.equal(true);
			});
		});
});