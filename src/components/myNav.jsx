import { Button } from "react-bootstrap";

const MyNav = () => {
	return (
		<nav
			className=" d-none d-md-block bg-black position-fixed h-100"
			/* style={{ minWidth: "280px" }} */
		>
			<ul className="nav flex-column">
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-three-dots fs-3 me-3"></i>
					</Button>
				</li>
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-house-door fs-3 me-3 me-3"></i>
						{""}
						Home
					</Button>
				</li>
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-search fs-3 me-3"></i> Cerca
					</Button>
				</li>
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-collection fs-3 me-3"></i> La tua
						libreria
					</Button>
				</li>
				<li className="nav-item mt-4">
					<Button variant="link" to="/#">
						<i className="bi bi-plus-square-fill fs-3 me-3"></i>
						{""}
						Crea playlist
					</Button>
				</li>
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-calendar-heart fs-3 me-3"></i>
						{""}
						Brani che ti piacciono
					</Button>
				</li>
				<li className="nav-item">
					<Button variant="link" to="/#">
						<i className="bi bi-bookmark-check fs-3 me-3"></i> I
						tuoi episodi
					</Button>
				</li>
			</ul>

			<hr />

			<div className="d-flex flex-column align-items-start ms-1">
				<Button variant="link">Ultimate Winter party</Button>
				<Button variant="link">Caffè del Buongiorno</Button>
				<Button variant="link">Japanese Lofi Chill</Button>
				<Button variant="link">Positive Vibes</Button>
				<Button variant="link">Mix Anni 2010</Button>
				<Button variant="link">Techno Bunker</Button>
				<Button variant="link">Happy Beats</Button>
				<Button variant="link">Dance Hits</Button>
				<Button variant="link">Christmas Jazz</Button>
				<Button variant="link">Feel Good Piano</Button>
				<Button variant="link">Energy Booster</Button>
			</div>
		</nav>
	);
};

export default MyNav;
