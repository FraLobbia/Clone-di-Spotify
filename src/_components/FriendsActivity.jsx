import { Button } from "react-bootstrap";

const FriendsActivity = () => {
	return (
		<>
			<button
				id="friendActivityButton"
				className="btn btn-dark bg-black circle position-absolute"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight">
				<i className="bi bi-people-fill"></i>
			</button>

			<div
				className="offcanvas offcanvas-end bg-black text-white"
				tabindex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
				aria-modal="true"
				role="dialog">
				<div className="offcanvas-header">
					<h5 id="offcanvasRightLabel" className="fs-6 fw-bold">
						Attività amici
					</h5>
					<div>
						<button
							type="button"
							className="btn circle fs-6 text-secondary"
							aria-label="add friend">
							<i className="bi bi-person-add"></i>
						</button>
						<button
							type="button"
							className="btn circle fs-6 text-secondary"
							data-bs-dismiss="offcanvas"
							aria-label="Close">
							<i className="bi bi-x-lg"></i>
						</button>
					</div>
				</div>
				<div className="offcanvas-body" id="friendsActivity">
					<div className="container-fluid mb-4">
						<div className="row">
							<div className="col-2">
								<Button href="#">
									<img
										src="./assets/imgs/profilo/fra_lobbia.jpeg"
										alt="friend's"
										className="circle img-fluid"
									/>
								</Button>
							</div>
							<div className="col-7">
								<Button href="#">
									<p className="m-0 fw-bold fw-bolder">
										Fra Lobbia
									</p>
								</Button>
								<p className="m-0">
									<Button href="">
										<span>Zombie</span>
									</Button>
									<i className="bi bi-dot"></i>
									<Button href="">
										<span>Cranberries</span>
									</Button>
								</p>
								<p className="m-0 fs-6 text-truncate">
									<Button href="">
										<i className="bi bi-disc"></i>
										<span>
											No Need To Argue (The Complete
											Sessions 1994-1995)
										</span>
									</Button>
								</p>
							</div>
							<div className="col-3">
								<p className="m-0 fs-6 text-secondary">2 min</p>
							</div>
						</div>
					</div>

					<div className="container-fluid mb-4">
						<div className="row">
							<div className="col-2">
								<Button href="#">
									<img
										src="./assets/imgs/profilo/fra_napoli.png"
										alt="friend's"
										className="circle img-fluid"
									/>
								</Button>
							</div>
							<div className="col-7">
								<Button href="#">
									<p className="m-0 fw-bold fw-bolder">
										Fra Napoli
									</p>
								</Button>
								<p className="m-0">
									<Button href="">
										<span>Zombie</span>
									</Button>
									<i className="bi bi-dot"></i>
									<Button href="">
										<span>Cranberries</span>
									</Button>
								</p>
								<p className="m-0 fs-6 text-truncate">
									<Button href="">
										<i className="bi bi-disc"></i>
										<span>
											No Need To Argue (The Complete
											Sessions 1994-1995)
										</span>
									</Button>
								</p>
							</div>
							<div className="col-3">
								<p className="m-0 fs-6 text-secondary">2 min</p>
							</div>
						</div>
					</div>

					<div className="container-fluid mb-4">
						<div className="row">
							<div className="col-2">
								<Button href="#">
									<img
										src="./assets/imgs/profilo/ste.png"
										alt="friend's"
										className="circle img-fluid"
									/>
								</Button>
							</div>
							<div className="col-7">
								<Button href="#">
									<p className="m-0 fw-bold fw-bolder">
										Stefano D'Antoni
									</p>
								</Button>
								<p className="m-0">
									<Button href="">
										<span>Zombie</span>
									</Button>
									<i className="bi bi-dot"></i>
									<Button href="">
										<span>Cranberries</span>
									</Button>
								</p>
								<p className="m-0 fs-6 text-truncate">
									<Button href="">
										<i className="bi bi-disc"></i>
										<span>
											No Need To Argue (The Complete
											Sessions 1994-1995)
										</span>
									</Button>
								</p>
							</div>
							<div className="col-3">
								<p className="m-0 fs-6 text-secondary">2 min</p>
							</div>
						</div>
					</div>

					<div className="container-fluid mb-4">
						<div className="row">
							<div className="col-2">
								<Button href="#">
									<img
										src="./assets/imgs/profilo/tia.png"
										alt="friend's"
										className="circle img-fluid"
									/>
								</Button>
							</div>
							<div className="col-7">
								<Button href="#">
									<p className="m-0 fw-bold fw-bolder">
										Mattia Lugaro
									</p>
								</Button>
								<p className="m-0">
									<Button href="">
										<span>Zombie</span>
									</Button>
									<i className="bi bi-dot"></i>
									<Button href="">
										<span>Cranberries</span>
									</Button>
								</p>
								<p className="m-0 fs-6 text-nowrap text-truncate">
									<Button href="">
										<i className="bi bi-disc"></i>
										<span>
											No Need To Argue (The Complete
											Sessions 1994-1995)
										</span>
									</Button>
								</p>
							</div>
							<div className="col-3">
								<p className="m-0 fs-6 text-secondary">2 min</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FriendsActivity;
