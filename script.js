function getTriangleArea(a, h) {

	if (a > 0 && h > 0) {
	  return a*h/2;
	}	
};

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 25);
var triangle3Area = getTriangleArea(30, 35);

console.log(triangle1Area);