import "../../css/adminPanel.css";

function AdminPanel() {
	return (
		<>
			<div className="admin-panel-wrapper">
				<div id="menu">
					<div className="menu-top">
						<div className="logo">
							<i className="fas fa-car"></i>
							<span>WeDrive</span>
						</div>

						<div className="hamburger-container">
							<div className="hamburger"></div>
						</div>
					</div>
					<ul>
						<h5 className="menu-header">Menu</h5>
						<li>
							<i className="fas fa-home"></i>
							Dashboard
						</li>
						<li>
							<i className="fas fa-cubes"></i>
							Packages
							<i className="fas fa-chevron-down"></i>
						</li>
						<li>
							<i className="fas fa-cog"></i>
							Settings
							<i className="fas fa-chevron-down"></i>
						</li>

						<h5 className="menu-header">Users</h5>
						<li>
							<i className="fas fa-users"></i>
							Applied users
						</li>
						<li>
							<i className="fas fa-users"></i>
							Subscribed users
						</li>

						<h5 className="menu-header">Pages</h5>
						<li>
							<i className="fas fa-user-cog"></i>
							Enquiry
							<i className="fas fa-chevron-down"></i>
						</li>
						<li>
							<i className="fas fa-file-alt"></i>
							Pages
							<i className="fas fa-chevron-down"></i>
						</li>
						<li>
							<i className="fas fa-tasks"></i>
							Reports
							<i className="fas fa-chevron-down"></i>
						</li>
					</ul>
				</div>
				<div className="dashboard">
					<nav>
						<div className="search">
							<button>
								<i className="fas fa-search"></i>
							</button>
							<input type="text" placeholder="Search" />
						</div>
						<div className="notif">
							<i className="font-large-icon fas fa-bell"></i>
						</div>
						<div className="font-large-icon admin-profile">pro</div>
						{/* <div className="font-large-icon logout">
						<i className="fas fa-sign-out-alt"></i>
					</div> */}
					</nav>
					<div className="boxes">
						<div className="box box1">
							<div className="box-contents box1-content">
								<div className="box-content1">
									<p className="box-main-content">Rs.16,000</p>
									<p className="box-content-header">Revenue</p>
									<p className="box-content-riseFall">
										<i className="fas fa-long-arrow-alt-up"></i>
										&nbsp;&nbsp;since last week
									</p>
								</div>

								<div className="chart">
									<div className="bar bar1">
										<span className="tooltip">15</span>
									</div>
									<div className="bar bar2">
										<span className="tooltip">20</span>
									</div>
									<div className="bar bar3">
										<span className="tooltip">16</span>
									</div>
									<div className="bar bar4">
										<span className="tooltip">30</span>
									</div>
								</div>
							</div>
						</div>
						<div className="box box2">
							<div className="box-contents box2-content">
								<div className="box-content1">
									<p className="box-main-content">16</p>
									<p className="box-content-header">Pending applications</p>
								</div>
							</div>
						</div>
						<div className="box box3">
							<div className="box-contents box3-content">
								<div className="box-content1">
									<p className="box-main-content">9</p>
									<p className="box-content-header">Enrolled</p>
								</div>
							</div>
						</div>
						<div className="box box4">box4</div>
						<div className="box box5">box6</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminPanel;
