import { useState } from "react";
import "../../css/nav.css";

function Nav() {
	const [flag, setFlag] = useState(true);
	const open = () => {
		const navLinks = document.querySelector(".nav-links");
		const navBar = document.querySelector(".navbar-container");
		const ham = document.querySelector(".hamburger-menu");
		const hamBtn = document.querySelector(".hamburger");
		if (flag) {
			navLinks.classList.add("open");
			ham.classList.add("ham");
			navBar.classList.add("scroll");
			hamBtn.style.opacity = "0";
			setFlag(false);
		} else {
			setFlag(true);
			close();
		}
	};
	const close = () => {
		const navLinks = document.querySelector(".nav-links");
		const ham = document.querySelector(".hamburger-menu");
		const hamBtn = document.querySelector(".hamburger");
		const navBar = document.querySelector(".navbar-container");
		navLinks.classList.remove("open");
		if (window.scrollY <= 420) {
			navBar.classList.remove("scroll");
		}
		setFlag(true);
		ham.classList.remove("ham");
		hamBtn.style.opacity = "1";
	};
	const [scrollChange, setScrollChange] = useState(false);
	const scrollBG = () => {
		if (window.scrollY <= 420 && flag) {
			setScrollChange(false);
		} else {
			setScrollChange(true);
		}
	};

	window.addEventListener("scroll", scrollBG);
	return (
		<nav className={"navbar-container " + (scrollChange && "scroll")}>
			<div className="navbar w70p">
				<div className="nav-logo">
					<a href="#features">
						<i className="hover-pointer fab fa-quinscape"></i>
					</a>
					<h2 className=" hover-pointer nav-logo-text">
						<span>We</span>Drive
					</h2>
				</div>
				<ul className="nav-links" onClick={close}>
					<a href="/">
						<li className="hover-pointer">Home</li>
					</a>
					<a href="#courses">
						<li className="hover-pointer">Courses</li>
					</a>
					<a href="#course-form">
						<li className="hover-pointer">Enroll</li>
					</a>
					<a href="/">
						<li className="hover-pointer">FAQs</li>
					</a>
					<a href="/">
						<li className="hover-pointer">Login</li>
					</a>
				</ul>
				<button className="hamburger-menu" onClick={open}>
					<div className={"hamburger "}></div>
				</button>
			</div>
		</nav>
	);
}

export default Nav;
