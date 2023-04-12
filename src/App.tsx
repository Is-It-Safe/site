import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes';
import './style/global.css';
import { Footer } from './components/Footer/Footer';

export const App = () => {
	return (
		<BrowserRouter>
			<Router />
			<Footer />
		</BrowserRouter>
	);
};
