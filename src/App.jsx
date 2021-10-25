import Nav from "./components/LandingPage/Nav";
import Header from "./components/LandingPage/Header";
import Info from "./components/LandingPage/Info";
import SchoolInfo from "./components/LandingPage/SchoolInfo";
import Courses from "./components/LandingPage/Courses";
import Instructor from "./components/LandingPage/Instructor";
import Form from "./components/LandingPage/Form";
import Gallery from "./components/LandingPage/Gallery";
import Feedback from "./components/LandingPage/Feedback";
import Footer from "./components/LandingPage/Footer";
import Testimony from "./components/LandingPage/Testimony";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<Info />
			<SchoolInfo />
			<Courses />
			<Form />
			<Instructor />
			<Gallery />
			<Testimony />
			<Feedback />
			<Footer />
		</div>
	);
}

export default App;
