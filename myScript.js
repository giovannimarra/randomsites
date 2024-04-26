tool.minDistance = 20;

function onMouseDown(event) {
	// Create a new path and give it a stroke color:
	path = new Path.Rectangle(event.point.x, event.point.y, 20);
    path.fillColor = {hue: Math.random()*360, saturation: 1,brightness: 1};

	// Add a segment to the path where
	// you clicked:
    path.smooth();
	path.add(event.point);

}

function onMouseDrag(event) {
    path.smooth();
	// Every drag event, add a segment
	// to the path at the position of the mouse:
	path.add(event.point);
}