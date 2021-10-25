import "../../css/info.css";

function Info() {
	return (
		<>
			<section className="w70p info">
				<div className="box-container">
					<div className="box4">
						<h2 className=" mb-05em">Our features</h2>
						<p className="fs-09em heading-p-color">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
							nisi nulla itaque fuga excepturi ullam.
						</p>
					</div>
					<div className="boxes">
						<div className="box box1">
							<div className="icon-wrapper">
								<div className="icon">
									<i className="fas fa-clock"></i>
								</div>
							</div>

							<h2 className="h2-padding">Timing</h2>
							<p>Mon - Fri</p>
							<p>9AM to 5PM</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda, sit!
							</p>
						</div>

						<div className="box box3">
							<div className="icon-wrapper">
								<div className="icon">
									<i className="fas fa-id-card"></i>
								</div>
							</div>
							<h2 className="h2-padding">Quick license</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Recusandae, suscipit! Repellat voluptatem laudantium cupiditate
								omnis?
							</p>
						</div>
						<div className="box box2">
							<div className="icon-wrapper">
								<div className="icon">
									<i className="fas fa-wallet"></i>
								</div>
							</div>
							<h2 className="h2-padding">Pricing</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam, ipsam nobis!
							</p>
							<a href="#courses">
								<button className="hover-pointer">Click here</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Info;
