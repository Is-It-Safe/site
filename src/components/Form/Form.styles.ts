import styled from 'styled-components';
import { RefObject } from 'react';
import { LegacyRef } from 'react';

type Iform = {
	ref: LegacyRef<HTMLFormElement> | ((instance: HTMLFormElement | null) => void) | RefObject<HTMLFormElement> | null | undefined;
};

export const FormContainer = styled.form`
	width: 100%;
`;
