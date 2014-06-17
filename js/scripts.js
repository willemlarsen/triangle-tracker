var Triangle = {

		valid: function () {
			 if (this.sideA > (this.sideB + this.sideC)) {
			 	return false;
			 } else if (this.sideB > (this.sideA + this.sideC)) {
			 	return false;
			 } else if (this.sideC > (this.sideB + this.sideA)) {
			 	return false;
			 } else {
			 	return true;
			}
		}, 

		type: function() {
			if (this.sideA === this.sideB && this.sideA === this.sideC) {
				return "equilateral";
			} else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideC === this.sideB) {
				return "isosceles";
			}
			//  else {
			// 	return "scalene";
		}

};





