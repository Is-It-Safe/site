import { ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { Donations } from '../pages/Donations/Donations';
// import { useUser } from '../providers/UserProvider';

import { Home } from '../pages/Home/Home';
import { Team } from '../pages/Team/Team';
import { TermsAndConditions } from '../pages/TermsAndConditions/TermsAndConditions';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';

interface ChildrenTypes {
	children: ReactNode;
}

const Public = ({ children }: ChildrenTypes): JSX.Element => {
	return <>{children}</>;
};

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			<Route
				path="/home"
				element={
					<Public>
						<Home />
					</Public>
				}
			/>
			<Route
				path="/team"
				element={
					<Public>
						<Team />
					</Public>
				}
			/>
			<Route
				path="/contact"
				element={
					<Public>
						<Contact />
					</Public>
				}
			/>
			<Route
				path="/donations"
				element={
					<Public>
						<Donations />
					</Public>
				}
			/>
			<Route
				path="/about"
				element={
					<Public>
						<About />
					</Public>
				}
			/>
			<Route
				path="/terms_and_conditions"
				element={
					<Public>
						<TermsAndConditions />
					</Public>
				}
			/>
			<Route
				path="/privacy_policy"
				element={
					<Public>
						<PrivacyPolicy />
					</Public>
				}
			/>
				path="*"
				element={<h1 className="text-white">Error 404</h1>}
			/>
		</Routes>
	);
};
