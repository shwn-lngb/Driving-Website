import React, { useRef, useState } from "react";
import { SliderData } from "./sliderData";
import "../css/slider.css";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const btnRight = useRef();
	const btnLeft = useRef();

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
	// console.log(current);
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider-container ">
			<div className="instructor-container">
				{SliderData.map((slide, index) => {
					return (
						<div
							className={`slide + ${index === current ? " active" : ""}`}
							key={index}
						>
							{index === current && (
								<div className="slider">
									<div className="single-slide">
										<img src={slide.image} alt="profile" className="image" />
										<div className="instructor-details">
											<h2 className="instructor-name">{slide.name}</h2>
											<div className="tags">
												<label>Tags:</label>
												<div>
													{slide.tag.map((tags, i) => {
														return (
															<p className="instructor-tag" key={i}>
																{tags}
															</p>
														);
													})}
												</div>
											</div>
											<p className="instructor-info">{slide.about}</p>
											<div className="socials">
												<a href="google">{slide.facebook}</a>
												<a href="google">{slide.whatsapp}</a>
												<a href="google">{slide.instagram}</a>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					);
				})}
				<button
					onClick={prevSlide}
					ref={btnLeft}
					className="hover-pointer slider-btn btn-left"
				>
					<i className="  fas fa-chevron-left"></i>
				</button>

				<button
					onClick={nextSlide}
					ref={btnRight}
					className="hover-pointer slider-btn btn-right"
				>
					<i className="  fas fa-chevron-right"></i>
				</button>
			</div>
		</section>
	);
};

export default Slider;
