import "../../css/footer.css";

function Footer() {
	return (
		<footer>
			<div className="grid-cols">
				<div className="contacts">
					<h3>Contacts</h3>
					<li>134568790</li>
					<li>134568790</li>
					<li>134568790</li>
				</div>
				<div className="social-links">
					<h3>Quick links</h3>
					<a href="#features">
						<li>Features</li>
					</a>
					<a href="#school">
						<li>About our schoool</li>
					</a>
					<a href="#courses">
						<li>Courses</li>
					</a>
					<a href="#course-form">
						<li>Form</li>
					</a>
					<a href="#instructors">
						<li>Instructors</li>
					</a>
					<a href="#gallery">
						<li>Gallery</li>
					</a>
					<a href="#feedback">
						<li>Feedback</li>
					</a>
				</div>
				<div className="courses">
					<h3>Courses</h3>
					<a href="#course">
						<li>Beginner Course</li>
					</a>
					<a href="#course">
						<li>Intermediate Course</li>
					</a>
					<a href="#course">
						<li>Professional Course</li>
					</a>
				</div>
				<div className="about">
					<h3>About</h3>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
						placeat architecto quibusdam, itaque sit omnis rem maiores laborum
						nobis qui beatae cumque cupiditate fugit alias.
					</li>
				</div>
				<div className="social-links">
					<h3>Social links</h3>
					<i className="fab fa-facebook"></i>
					<i className="fab fa-whatsapp"></i>
					<i className="fab fa-instagram"></i>
					<i className="fab fa-twitter"></i>
				</div>
			</div>

			<hr />
			<p className="copyright">Copyright© 2021 | All rights reserved.</p>
		</footer>
	);
}

export default Footer;
