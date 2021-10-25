import "../css/trafficlight.css";

function Trafficlight({ icon }) {
	return (
		<>
			<div className="place-me">
				<div className="line">
					<i className="fas fa-traffic-light t-light"></i>
					{icon}
				</div>
			</div>
		</>
	);
}

export default Trafficlight;
