import "../../css/form.css";
function Form() {
	return (
		<>
			<section className="course-form-container" id="course-form">
				<div>
					<div className="form-header">
						<h2>Are you interested in our lessons?</h2>
					</div>
					<form>
						<div className="design-form"></div>
						<p className="para">
							Apply for the course by filling up this form!
						</p>
						<div className="form-icons">
							<input type="text" placeholder="First Name" required />
							<i className="fas fa-user"></i>
						</div>
						<div className="form-icons">
							<input type="text" placeholder="Last Name" required />
							<i className="fas fa-user"></i>
						</div>
						<div className="form-icons">
							<input type="email" placeholder="Email" required />
							<i className="fas fa-envelope"></i>
						</div>
						<div className="form-icons">
							<input type="text" placeholder="Phone" required />
							<i className="fas fa-phone"></i>
						</div>
						<select className="checkboxes">
							<option type="text" defaultValue disabled>
								Choose a course
							</option>
							<option type="text">Course1</option>
							<option type="text">Course2</option>
							<option type="text">Course3</option>
						</select>

						<button>Enroll now</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Form;
