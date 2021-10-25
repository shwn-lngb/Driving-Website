import React, { useState } from "react";
import data from "../../functions/GalleryData";
import "../../css/gallery.css";
import Trafficlight from "../../functions/Trafficlight";

function Gallery() {
	const [noOfItems, setnoOfItems] = useState(5);

	const viewMore = () => {
		setnoOfItems(noOfItems + noOfItems);
	};
	const viewLess = () => {
		setnoOfItems(5);
	};
	const slice = data.gallery.slice(0, noOfItems);
	// console.log(noOfItems);

	return (
		<>
			<section className="gallery-container w70p">
				<div className="gallery-header">
					<h2 className="mb-05em">Gallery</h2>
					<Trafficlight />

					<p className="heading-p-color fs-09em">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut
						numquam libero, voluptatibus atque dolorum!
					</p>
				</div>
				<div className="gallery">
					{slice.map((item, index) => {
						return (
							<img
								src={item.img}
								className={index % 5 === 0 ? "span2" : ""}
								alt="gallery"
								key={index}
							/>
						);
					})}
				</div>

				<div className="gallery-viewmore-btn">
					{noOfItems === 5 ? (
						<p className="hover-pointer viewmore" onClick={viewMore}>
							View more <i className="fas fa-chevron-down"></i>
						</p>
					) : (
						<p className="hover-pointer viewmore" onClick={viewLess}>
							View less <i className="fas fa-chevron-up"></i>
						</p>
					)}
				</div>
			</section>
		</>
	);
}

export default Gallery;
