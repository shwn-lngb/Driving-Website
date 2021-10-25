import React, { useRef, useState } from "react";
import Trafficlight from "../../functions/Trafficlight";
import "../../css/testimony.css";
import { testimony } from "../../functions/testimonyData";

const Testimony = () => {
	const [current, setCurrent] = useState(0);
	const btnRight = useRef();
	const btnLeft = useRef();
	const length = testimony.length;
	const quoteIcon = <i className="fas fa-quote-left t-light"></i>;
	const quoteIconClose = <i className="fas fa-quote-right t-light"></i>;
	const nextSlide = () => {
		if (current < length - 2) {
			setCurrent(current + 1);
			btnLeft.current.disabled = false;
			// console.log(btnRight);
		} else if (current < length - 1) {
			setCurrent(current + 1);
			btnRight.current.disabled = true;
		}
	};
	const prevSlide = () => {
		if (current > 1) {
			setCurrent(current - 1);
			btnRight.current.disabled = false;
		} else if (current === 1) {
			setCurrent(current - 1);
			btnLeft.current.disabled = true;
		}
	};
	const testimonyData = testimony.map((student, index) => {
		return (
			index === current && (
				<div key={index}>
					<h3>{student.name}</h3>
					<i>
						<p>
							<sup>
								<i className="fas fa-quote-left"></i>
							</sup>{" "}
							{student.msg}
							{"  "}
							<sup>
								<i className="fas fa-quote-right"></i>
							</sup>
						</p>
					</i>
				</div>
			)
		);
	});

	return (
		<section className="testimony-section w70p">
			<Trafficlight icon={quoteIcon} />
			<div className="main-testimony">
				<h2 className="testimony-header">What our students say</h2>
				<div className="testimonyBtn-container">
					{testimonyData}
					<button ref={btnLeft} onClick={prevSlide}>
						{/* {"<<"} */}
						<i className="fas fa-chevron-left"></i>
						<i className="fas fa-chevron-left"></i>
					</button>

					<button ref={btnRight} onClick={nextSlide}>
						<i className="fas fa-chevron-right"></i>
						<i className="fas fa-chevron-right"></i>
						{/* {">>"} */}
					</button>
				</div>
			</div>
			<Trafficlight icon={quoteIconClose} />
		</section>
	);
};

export default Testimony;
