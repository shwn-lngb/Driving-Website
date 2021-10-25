import "../../css/courses.css";

function Courses() {
	return (
		<>
			<div className="courses-bg" id="courses">
				<section className="courses-container w70p ">
					<h2 className="courses-header mb-05em">Check out our courses</h2>
					<p className="fs-09em heading-p-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
						amet!
					</p>
					<div className="courses-cards">
						<div className="card card1">
							<div className="card-course-header">
								<h3>Beginner Course</h3>
								<p>
									<span>Rs.</span>500
								</p>
							</div>
							<ul>
								<li>Lorem1</li>
								<li>Lorem2</li>
								<li>Lorem3</li>
								<li>Lorem4</li>
							</ul>
						</div>
						<div className="card card2">
							<div className="card-course-header">
								<h3>Professional Course</h3>
								<p>
									<span>Rs.</span>1500
								</p>
							</div>
							<ul>
								<li>Lorem1</li>
								<li>Lorem2</li>
								<li>Lorem3</li>
								<li>Lorem4</li>
							</ul>
						</div>
						<div className="card card3">
							<div className="card-course-header">
								<h3>Intermediate Course</h3>
								<p>
									<span>Rs.</span>800
								</p>
							</div>
							<ul>
								<li>Lorem1</li>
								<li>Lorem2</li>
								<li>Lorem3</li>
								<li>Lorem4</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Courses;
