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
			} else {
				return "scalene";
			}
		}

};

$(document).ready(function () {
	$('form#new-triangle').submit(function(event) {
		event.preventDefault();

		var inputSideOne = parseInt($('input#new-triangle-side1').val(), 10);
		var inputSideTwo = parseInt($('input#new-triangle-side2').val(), 10);
		var inputSideThree = parseInt($('input#new-triangle-side3').val(), 10);

		var newTriangle = Object.create(Triangle);
			newTriangle.sideA = inputSideOne;
			newTriangle.sideB = inputSideTwo;
			newTriangle.sideC = inputSideThree;


		if(!newTriangle.valid()) {
			return alert("Sorry, that's not a valid triangle.");
		} else if(newTriangle.type() === "equilateral") {
	   		$('ul#equilateral').append("<li>" + inputSideOne + ", " + inputSideTwo + ", " + inputSideThree + "</li>");
	  } else if (newTriangle.type() === "isosceles") {
	  		$('ul#isosceles').append("<li>" + inputSideOne + ", " + inputSideTwo + ", " + inputSideThree + "</li>");
	  } else {
	  		$('ul#scalene').append("<li>" + inputSideOne + ", " + inputSideTwo + ", " + inputSideThree + "</li>");
	  }
	    
	});
});





