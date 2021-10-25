import "../../css/instructor.css";
import Slider from "../../functions/slider";
import { SliderData } from "../../functions/sliderData";
import Trafficlight from "../../functions/Trafficlight";

function Instructor() {
	return (
		<>
			<div className="instructor-container" id="instructors">
				<h2 className="mb-05em">Instructor</h2>
				<Trafficlight />
				<p className="fs-09em heading-p-color">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
					quos.
				</p>
				<div className="slider-bg">
					<Slider slides={SliderData} />
				</div>
			</div>
			<div id="gallery"></div>
		</>
	);
}

export default Instructor;
