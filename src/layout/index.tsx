import styled, { css } from 'styled-components';

type IFrame = {
	direction: 'column' | 'row';
	gap?: number;
};

export const Frame = styled.div<IFrame>`
	${(props) => {
		const { direction, gap } = props;
		return css`
			display: flex;
			flex-direction: ${direction || ''};
			gap: ${gap ? `${gap}px` : ''};
		`;
	}}
`;
