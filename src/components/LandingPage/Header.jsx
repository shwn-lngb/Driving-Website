import "../../css/header.css";
import teacher from "../../svg/teacher.svg";
import car from "../../svg/car with cone.svg";

function Header() {
	return (
		<header id="features">
			<div className="background">
				<div className="container w70p">
					<div className="image">
						<img className="car" src={car} alt="car" />
						<img className="teacher" src={teacher} alt="teacher" />
					</div>
					<div className="header-text">
						<div className="header-items">
							<h1>
								<span>Drive</span> with us
							</h1>
							<p className="display-1">Lorem ipsum dolor sit, amet!</p>
							<p className="display-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
								inventore.
							</p>

							<button className="hover-pointer header-button">Apply now</button>
						</div>
					</div>
				</div>
			</div>
			<div className="wave"></div>
		</header>
	);
}

export default Header;
