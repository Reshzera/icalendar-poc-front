import React, { forwardRef } from "react";
import { InputContainer, InputWrapper } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <InputWrapper>
        {label && <label>{label}</label>}
        <InputContainer>
          <input ref={ref} {...rest} />
        </InputContainer>
        {error && <span>{error}</span>}
      </InputWrapper>
    );
  }
);

export default Input;
