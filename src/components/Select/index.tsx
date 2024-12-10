import React from "react";
import { SelectWrapper, StyledSelect } from "./styles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <SelectWrapper>
      <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
