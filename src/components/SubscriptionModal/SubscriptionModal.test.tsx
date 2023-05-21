import { render, screen, fireEvent } from '@testing-library/react';
import { SubsCriptionModal } from './SubscriptionModal';

describe('SubsCriptionModal', () => {
	const setShowModalMock = jest.fn();

	beforeEach(() => {
		render(
			<SubsCriptionModal
				showmodal={true}
				setShowModal={setShowModalMock}
			/>,
		);
	});

	it('renders the modal header correctly', () => {
		const titleText = 'Quero ser voluntário!';
		const subTitleText =
			'Após o envio deste formulário, a equipe do Is It Safe? irá entrar em contato através do e-mail fornecido.';

		expect(screen.getByText(titleText)).toBeInTheDocument();
		expect(screen.getByText(subTitleText)).toBeInTheDocument();
	});

	it('triggers the setShowModal function when cancel button is clicked', () => {
		const cancelButton = screen.getByText('CANCELAR');
		fireEvent.click(cancelButton);

		expect(setShowModalMock).toHaveBeenCalledWith(false);
	});
});
