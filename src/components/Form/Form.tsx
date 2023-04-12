import { ReactNode } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { FormContainer } from './Form.styles';

type IForm = {
	handleSubmit: UseFormHandleSubmit<any>;
	onSubmit: (data: any) => void;
	children: ReactNode;
};

const Form = ({ handleSubmit, onSubmit, children }: IForm) => {
	return (
		<FormContainer
			style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
			autoComplete="on"
			onSubmit={handleSubmit(onSubmit)}
		>
			{children}
		</FormContainer>
	);
};

export { Form };
