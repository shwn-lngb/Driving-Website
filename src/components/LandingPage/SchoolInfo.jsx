import "../../css/schoolInfo.css";
import Carbg from "../../svg/cartoonbg.svg";
import Carbg2 from "../../svg/carr.svg";
import { useState } from "react";

const SchoolInfo = () => {
	const [winWidth, setwinWidth] = useState(0);
	window.addEventListener("resize", () => {
		const w = window.innerWidth;
		setwinWidth(w);
	});
	const car900px = (
		<div className="car900px">
			<object className="vector-traffic" data={Carbg}>
				vector-traffic
			</object>
			<object className="vector-traffic" data={Carbg2}>
				vector-traffic
			</object>
		</div>
	);
	return (
		<>
			<div className="background-ad-cover">
				<h2 className="mb1">Let's learn together.</h2>
				<p id="school">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
					incidunt.
				</p>
			</div>
			<section className=" w70p mt5">
				<div className="school-info ">
					<div className="image m-vector7 image1">
						<object className="vector-traffic" data={Carbg}>
							vector-traffic
						</object>
					</div>
					<div className="school-history">
						<h2 className="mb1">History</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							unde aspernatur asperiores alias non modi amet perspiciatis
							repudiandae dolorum autem. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Amet iure aut rem officiis facere
							exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Distinctio assumenda accusamus quaerat culpa quisquam quae
							ratione fugit nemo aliquam! Magni ea consectetur cum, ullam illo
							quia odit quisquam iste aliquid.
						</p>
					</div>
					{winWidth <= 900 && winWidth >= 650 ? car900px : null}
					<div className="school-about m-vector7">
						<h2 className="mb1">About our school</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							unde aspernatur asperiores alias non modi amet perspiciatis
							repudiandae dolorum autem. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Amet iure aut rem officiis facere
							exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Distinctio assumenda accusamus quaerat culpa quisquam quae
							ratione fugit nemo aliquam! Magni ea consectetur cum, ullam illo
							quia odit quisquam iste aliquid.
						</p>
					</div>
					<div className="image image2">
						<object className="vector-traffic" data={Carbg2}>
							vector-traffic
						</object>
					</div>
				</div>
			</section>
		</>
	);
};

export default SchoolInfo;
