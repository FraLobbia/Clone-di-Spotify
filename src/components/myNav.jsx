import { Button, Container } from "react-bootstrap";
import ButtonLink from "./ButtonLink";
import { Link } from "react-router-dom";

const MyNav = ({ children }) => {
	return (
		<Container fluid className="d-flex">
			<nav
				className="d-none d-md-block bg-black border-end border-tertiary "
				style={{ minWidth: "280px" }}>
				<ul className="nav flex-column">
					<li className="nav-item">
						<ButtonLink to="/">
							<i className="bi bi-three-dots fs-3 me-3"></i>
						</ButtonLink>
					</li>
					<li className="nav-item">
						<ButtonLink to="/">
							<i className="bi bi-house-door fs-3 me-3 me-3"></i>
							{""}
							Home
						</ButtonLink>
					</li>
					<li className="nav-item">
						<ButtonLink to="/">
							<i className="bi bi-search fs-3 me-3"></i> Cerca
						</ButtonLink>
					</li>
					<li className="nav-item">
						<ButtonLink to="/">
							<i className="bi bi-collection fs-3 me-3"></i> La
							tua libreria
						</ButtonLink>
					</li>
					<li className="nav-item mt-4">
						<ButtonLink to="/">
							<i className="bi bi-plus-square-fill fs-3 me-3"></i>
							{""}
							Crea playlist
						</ButtonLink>
					</li>
					<li className="nav-item">
						<ButtonLink to="/liked-songs">
							<i className="bi bi-calendar-heart fs-3 me-3"></i>
							{""}
							Brani che ti piacciono
						</ButtonLink>
					</li>
					<li className="nav-item">
						<ButtonLink to="/">
							<i className="bi bi-bookmark-check fs-3 me-3"></i> I
							tuoi episodi
						</ButtonLink>
					</li>
				</ul>

				<hr />

				<div className="d-flex flex-column align-items-start ms-1">
					<ButtonLink to="/">Ultimate Winter party</ButtonLink>
					<ButtonLink to="/">Caffè del Buongiorno</ButtonLink>
					<ButtonLink to="/">Japanese Lofi Chill</ButtonLink>
					<ButtonLink to="/">Positive Vibes</ButtonLink>
					<ButtonLink to="/">Mix Anni 2010</ButtonLink>
					<ButtonLink to="/">Techno Bunker</ButtonLink>
					<ButtonLink to="/">Happy Beats</ButtonLink>
					<ButtonLink to="/">Dance Hits</ButtonLink>
					<ButtonLink to="/">Christmas Jazz</ButtonLink>
					<ButtonLink to="/">Feel Good Piano</ButtonLink>
					<ButtonLink to="/">Energy Booster</ButtonLink>
				</div>
			</nav>
			{children}
		</Container>
	);
};

export default MyNav;
