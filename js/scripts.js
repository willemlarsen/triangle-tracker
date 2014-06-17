var TriangleTracker = {

		triangleTest: function () {
			 if (this.sideA > (this.sideB + this.sideC)) {
			 	return false;
			 } else if (this.sideB > (this.sideA + this.sideC)) {
			 	return false;
			 } else if (this.sideC > (this.sideB + this.sideA)) {
			 	return false;
			 } else {
			 	return true;
			}
		}
};

/*function Person(sideA, sideB, sideC) {
	this.sideA = sideA;
	this.sideB = sideB;
	this.sideC = sideC;
}*/




