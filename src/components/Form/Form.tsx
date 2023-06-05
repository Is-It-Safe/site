import { ReactNode } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

type IForm = React.DetailedHTMLProps<
	React.FormHTMLAttributes<HTMLFormElement>,
	HTMLFormElement
> & {
	handleSubmit: UseFormHandleSubmit<any>;
	onSubmit: (data: any) => void;
	children: ReactNode;
};

const Form = ({ handleSubmit, onSubmit, children, ...props }: IForm) => {
	return (
		<form
			style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
			autoComplete="on"
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			{children}
		</form>
	);
};

export { Form };
