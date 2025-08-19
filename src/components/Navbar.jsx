import logoImageUrl from "../assets/img/imgstarwars.png";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
					<img src={logoImageUrl} alt="logo starWars" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites <span className="badge text-bg-secondary">4</span>
							</button>
							{/* <ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul> */}
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};