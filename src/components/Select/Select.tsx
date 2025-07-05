import {type PropsWithChildren} from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants.js';
import {ChevronDown} from "react-feather";

interface ISelectProps extends PropsWithChildren{
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectStyled = styled.select`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 8px;
  border-style: none;
  padding: 0.75rem 3.25rem 0.75rem 1rem;
  appearance: none; /* Убираем стандартную стрелку */
  line-height: 100%; /* Устанавливаем line-height для центрирования текста */
  text-align: left; /* Устанавливаем выравнивание текста */
  cursor: pointer;
  
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${COLORS.primary};
  }
  &:hover{
    color: ${COLORS.black};
  }
`;

const ArrowIcon = styled(ChevronDown)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Чтобы клики проходили через иконку */

  &:hover{
    color: ${COLORS.black};
  }
`;


const Select = ({ label, value, onChange, children } : ISelectProps) => {
  //const displayedValue = getDisplayedValue(value, children);

  return (
      <SelectWrapper>
        <SelectStyled
            value={value}
            onChange={e => onChange(e.target.value)}>
          {children}
        </SelectStyled>
        <ArrowIcon id={'chevron-down'} size={20} color={COLORS.gray700} />
      </SelectWrapper>
  );
};

export default Select;
