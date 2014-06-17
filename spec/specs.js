describe('TriangleTracker', function () {
		describe('triangleTest', function () {
			it('returns a true if a given potential triangle would work', function() {
				var exampleTriangleOne = Object.create(TriangleTracker);
					exampleTriangleOne.sideA = 3;
					exampleTriangleOne.sideB = 3;
					exampleTriangleOne.sideC = 3;
					exampleTriangleOne.triangleTest().should.equal(true);
				
			});
			it('returns a false if a given potential triangle would not work', function () {
			var exampleTriangleTwo = Object.create(TriangleTracker);
					exampleTriangleTwo.sideA = 4;
					exampleTriangleTwo.sideB = 5;
					exampleTriangleTwo.sideC = 10;
					exampleTriangleTwo.triangleTest().should.equal(false);
			});
		});
});