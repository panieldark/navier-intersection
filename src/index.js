document.addEventListener("DOMContentLoaded", function () {
	/** @type { import("fabric/fabric-impl") } */
	const fabric = window.fabric;

	// create `Canvas` object using `<canvas>` DOM node
	const canvas = new fabric.Canvas("canvas");

	/*--------------*/

	// create a `Line` object
	const line = new fabric.Line([50, 50, 200, 50], {
		strokeWidth: 5,
		stroke: "#03A87C",
	});

	// create a `Circle` object
	const circle = new fabric.Circle({
		top: 50,
		left: 250,
		radius: 50,
		fill: "#AB47BC",
	});

	// create a `Triangle` object
	const triangle = new fabric.Triangle({
		top: 60,
		left: 50,
		width: 50,
		height: 90,
		fill: "#5C6BC0",
	});

	// create a `Rect` object
	const rect = new fabric.Rect({
		width: 100,
		height: 100,
		top: 200,
		left: 50,
		fill: "#8BC34A",
	});

	// create an `Ellipse` object
	const ellipse = new fabric.Ellipse({
		rx: 100,
		ry: 50,
		top: 200,
		left: 200,
		fill: "#FFC107",
	});

	// create a `Polyline` object
	const polyline = new fabric.Polyline(
		[
			{ x: 0, y: 0 },
			{ x: 50, y: 0 },
			{ x: 50, y: 50 },
		],
		{ top: 300, left: 400, fill: "transparent", stroke: "#795548" }
	);

	// create a `Polygon` object
	const polygon = new fabric.Polygon(
		[
			{ x: 0, y: 0 },
			{ x: 50, y: 0 },
			{ x: 50, y: 50 },
		],
		{ top: 200, left: 400, fill: "transparent", stroke: "#795548" }
	);

	// add objects to the canvas
	canvas.add(line, circle, triangle, rect, ellipse, polygon, polyline);

	console.log(ellipse);
});
