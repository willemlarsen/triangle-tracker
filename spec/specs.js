describe('Triangle', function () {
		describe('valid', function () {
			it('returns a true if a given potential triangle would work', function() {
				var exampleTriangleOne = Object.create(Triangle);
					exampleTriangleOne.sideA = 3;
					exampleTriangleOne.sideB = 3;
					exampleTriangleOne.sideC = 3;
					exampleTriangleOne.valid().should.equal(true);
				
			});
			it('returns a false if a given potential triangle would not work', function () {
			var exampleTriangleTwo = Object.create(Triangle);
					exampleTriangleTwo.sideA = 4;
					exampleTriangleTwo.sideB = 5;
					exampleTriangleTwo.sideC = 10;
					exampleTriangleTwo.valid().should.equal(false);
			});
		});
});