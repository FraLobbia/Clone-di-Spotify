import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, children, variant = "link", className }) => {
	return (
		<Link to={to}>
			<Button variant={variant} className={className}>
				{children}
			</Button>
		</Link>
	);
};

export default ButtonLink;
