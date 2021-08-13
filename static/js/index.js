const BG_IMAGE_LINK =
	"https://arbitrage-prod-files.s3.amazonaws.com/media/canvas_bg.png";

const initCanvas = (id) => {
	return new fabric.Canvas(id, {
		width: 1000,
		height: 1000,
		selection: false,
	});
};
const setBackground = (url, canvas) => {
	fabric.Image.fromURL(url, (img) => {
		canvas.backgroundImage = img;
		canvas.renderAll();
	});
};

const clearCanvas = (canvas) => {
	canvas.forEachObject((o) => {
		if (o !== canvas.backgroundImage) {
			canvas.remove(o);
		}
	});
};

const createRect = (canvas) => {
	const canvCenter = canvas.getCenter();
	const rect = new fabric.Rect({
		width: 100,
		height: 100,
		left: canvCenter.left,
		top: canvCenter.top,
		originX: "center",
		originY: "center",
		objectCaching: false,

		stroke: "black",
		strokeWidth: 2,
		fill: "rgba(0,0,0,0)",
	});
	canvas.add(rect);
	canvas.renderAll();

	rect.on("selected", () => {
		console.log("rect selected");
		console.log(rect);
	});
};
const createCirc = (canvas) => {
	const canvCenter = canvas.getCenter();
	const circ = new fabric.Circle({
		radius: 50,
		fill: "orange",
		left: canvCenter.left,
		top: canvCenter.top,
		originX: "center",
		originY: "center",
		objectCaching: false,
	});
	canvas.add(circ);
	canvas.renderAll();

	circ.on("selected", () => {
		console.log("circ selected");
		console.log(circ);
	});
};

const canvas = initCanvas("canvas");

setBackground(BG_IMAGE_LINK, canvas);
