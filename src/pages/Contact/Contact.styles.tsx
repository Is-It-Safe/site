import styled from 'styled-components';

type SnackMessageProps = {
    color: string;
    display: string;
  }
  

export const ContactMain = styled.div`
	margin: 5% 20% 10%;
    @media only screen and (max-width: 912px)
    { 
        margin: 5% 10% 10%;
    }

    @media only screen and (max-width: 500px) {
	#contact {
		margin: 5% 10% 10%;
	}
}

`;

export const FormContainer = styled.div`
	display: flex;
	gap: 79px;
	align-items: center;
`;

export const SnackMessage = styled.div<SnackMessageProps>`
	display: ${props => props.display };
	position: absolute;
	top: 31%;
	right: 10%;
	padding: 20px;
	padding-top: 10px;
	width: 350px;
	height: 16px;
	border-radius: 4px;
	background-color:${props => props.color};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	> span {
		text-align: center;
		font-family: 'Poppins';
		font-style: normal;
		line-height: 20px;
		font-weight: 300;
		font-size: 15px;
		width: 450px;
		color: white;
		margin-right: 30px;
		margin-left: 5px;
		letter-spacing: 0.01rem;
		padding-top: 2px;
	}

	.SnackMessageCloseIcon {
		position: absolute;
		right: 330px;
		top: 10px;
		color: white;
		font-size: 22px;
		line-height: 18px;
		font-weight: 500;
	}
	.SnackMessageInfoIcon {
		display: none;
		color: white;
		font-weight: 700;
		font-size: 22px;
		line-height: 20px;
		margin-right: 220px;
		font-weight: 500;
	}

    @media only screen and (max-width: 912px) { 
     display: ${props => props.display };
     position: absolute;
     top: 20%;
     left: 20%;
     padding: 20px;
     padding-top: 10px;
     width: 50vw;
     height: 16px;
     border-radius: 4px;
     background-color:${props => props.color };
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
     
	> span {
		text-align: center;
		font-family: 'Poppins';
		font-style: normal;
		line-height: 20px;
		margin-left: 10%;
		margin-top: 0.5%;
		font-weight: 300;
		font-size: 14px;
		color: white;
		letter-spacing: 0.01rem;
		padding-top: 2px;
	}

	.snackMessageCloseIcon {
		position: absolute;
		right: 20px;
		top: 0px;
		color: white;
		font-weight: 700;
		font-size: 22px;
		box-sizing: border-box;
		height: 45px;
	}
	.snackMessageInfoIcon {
		position: absolute;
		color: white;
		left: 20px;
		top: 0px;
		font-weight: 700;
		font-size: 22px;
		margin-right: 10px;
		box-sizing: border-box;
		height: 45px;
	}
    }
@media only screen and (max-width: 500px){
        display: ${props => props.display };
		position: absolute;
		top: 200px;
		left: 0px;
		padding: 20px;
		padding-top: 10px;
		width: 89vw;
		height: 16px;
		border-radius: 4px;
		background-color: ${props => props.color };
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	

	> span {
		text-align: center;
		font-family: 'Poppins';
		font-style: normal;
		line-height: 20px;
		margin-left: 30px;
		margin-top: 0.5%;
		font-weight: 300;
		font-size: 14px;
		color: white;
		letter-spacing: 0.01rem;
		padding-top: 2px;
	}

	.snackMessageCloseIcon {
		position: absolute;
		right: 20px;
		top: 0px;
		color: white;
		font-weight: 700;
		font-size: 22px;
		box-sizing: border-box;
		height: 45px;
	}
	.snackMessageInfoIcon {
		position: absolute;
		color: white;
		left: 20px;
		top: 0px;
		font-weight: 700;
		font-size: 22px;
		margin-right: 10px;
		box-sizing: border-box;
		height: 45px;
	}

}
`;


export const Title = styled.div`
	h2 {
		font-family: 'Poppins';
		color: #5c45ed;
		margin-bottom: 5px;
		font-size: 1.125rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	p {
		font-family: 'Poppins';
		color: #251650;
		margin-bottom: 49px;
		font-size: 0.875rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 518px;
`;

export const Label = styled.label`
	color: #5b3cf1;
	font-size: 1rem;
	font-family: 'Poppins';
`;

export const Input = styled.input`
	padding: 10px;
	margin-top: 2.34px;
	margin-bottom: 27px;
	border-radius: 5px;
	border: 1.3px solid #ced4da;
	font-size: 1rem;

	&[type='text'],
	&[type='email'] {
		&:focus {
			outline: none;
			border: 1px solid #5b3cf1;
		}
	}
`;

export const TextArea = styled.textarea`
	padding: 10px;
	margin-top: 2.34px;
	margin-bottom: 27px;
	border-radius: 8px;
	border: 1.3px solid #ced4da;
	font-size: 1rem;
	height: 9.56rem;
	resize: none;

	&:focus {
		outline: none;
		border: 1px solid #5b3cf1;
	}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-family: 'Poppins';
  border-radius: 6px;
  border: none;
  background-color: #5c45ed;
  color: #faf9ff;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  width: 180px;
  height: 56px;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4e39c4;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  max-width: 300px;
  margin-left: 20px;

  img {
    width: 571px;
    height: 405px;
  }
  @media only screen and (max-width: 912px) { display: none; }
  @media only screen and (max-width: 500px) { display: none; }
`;
