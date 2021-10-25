import "../../css/feedback.css";

function Feedback() {
	return (
		<section className="feedback-section" id="feedback">
			<form className="feedback-form w70p">
				<h2 className="feedback-form-header mb-05em">Have Any Questions?</h2>
				<div className="fb-input-icon">
					<input type="text" placeholder="Full Name" required />
					<i className="fas fa-user"></i>
				</div>
				<div className="fb-input-icon">
					<input type="email" placeholder="Email" required />
					<i className="fas fa-envelope"></i>
				</div>

				<textarea type="text" placeholder="Ask a question.." required />
				<button>Send</button>
			</form>
		</section>
	);
}

export default Feedback;
