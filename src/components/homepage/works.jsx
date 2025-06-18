import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/D4D0BAQEtLjd6LL4-jA/company-logo_200_200/company-logo_200_200/0/1691218771440/fuelfree_logo?e=1755734400&v=beta&t=1dLkYN_PD-tlFTCroYigNiBHlsXJHvoFxcLt7sXs2co"
								alt="Fuel Free"
								className="work-image"
							/>
							<div className="work-title">Fuel Free</div>
							<div className="work-subtitle">React Native Developer</div>
							<div className="work-duration">March 2023 - Dec 2023</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C510BAQHa_hsds73_Ew/company-logo_200_200/company-logo_200_200/0/1630586075585/avion_technology_inc_logo?e=1755734400&v=beta&t=IyHTjZN2hxYJurEnQI1RaqvmyVARs5duk1Vg7sUa6Gk"
								alt="Avion Technologies"
								className="work-image"
							/>
							<div className="work-title">Avion Technologies</div>
							<div className="work-subtitle">React Native Developer</div>
							<div className="work-duration">Jan 2024 - Jun 2025</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/D560BAQFEh5w5f9fEKw/company-logo_200_200/company-logo_200_200/0/1699257042379/alphawarenext_logo?e=1755734400&v=beta&t=HGW5oHxWfITFc4g_4U_Fb514d9385axaSa-C-GSFu3g"
								alt="Alphaware Next Technologies"
								className="work-image"
							/>
							<div className="work-title">Alphaware Next Technologies</div>
							<div className="work-subtitle">React Native Developer</div>
							<div className="work-duration">Jun 2025 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
