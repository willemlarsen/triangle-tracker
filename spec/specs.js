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
	describe('type', function () {
			it('returns "equilateral" if a potential triangle is an equilateral triangle', function () {
				var exampleTriangleThree = Object.create(Triangle);
					exampleTriangleThree.sideA = 4;
					exampleTriangleThree.sideB = 4;
					exampleTriangleThree.sideC = 4;
					exampleTriangleThree.type().should.equal('equilateral');
			});
			it('returns "isosceles" if a potential triangle is an isosceles triangle', function () {
				var exampleTriangleFour = Object.create(Triangle);
					exampleTriangleFour.sideA = 2;
					exampleTriangleFour.sideB = 3;
					exampleTriangleFour.sideC = 2;
					exampleTriangleFour.type().should.equal('isosceles');
			});
			it('returns "scalene" if a potential triangle is neither isosceles or equilateral', function () {
				var exampleTriangleFive = Object.create(Triangle);
					exampleTriangleFive.sideA = 3;
					exampleTriangleFive.sideB = 4;
					exampleTriangleFive.sideC = 5;
					exampleTriangleFive.type().should.equal('scalene');
			});
	});
});