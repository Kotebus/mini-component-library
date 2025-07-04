import styled from 'styled-components';

import { COLORS } from '../../constants';
import type {ProgressBarSize} from "../../App.tsx";
import type {CSSProperties} from "react";

const HEIGHT_SIZE_MAP = {
  'small': 8,
  'medium': 12,
  'large': 24,
};

const Wrapper = styled.div`
    width: 370px;
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    overflow: hidden;
`;

const Bar = styled.div`
    background-color: ${COLORS.primary};
    height: inherit;
    border-radius: 2.5px;
`;

const ProgressBar = (
    { value, size, ariaLabelledBy = 'progressbar' } : {value: number, size: ProgressBarSize, ariaLabelledBy: string }
) => {
    const wrapperStyle: CSSProperties = {
        height: HEIGHT_SIZE_MAP[size],
        ...(size === 'large' && {padding: '4px 4px'}),
    };

    const barStyle = {
        width: value + '%',
        ...(size === 'large' && {height: HEIGHT_SIZE_MAP[size] - 8}),
    } as CSSProperties;

    console.log(wrapperStyle);

    return (
        <Wrapper
            role="progressbar"
            style={wrapperStyle}
            aria-valuenow={value}
            aria-labelledby={ariaLabelledBy}
            aria-label={value+'%'}
        >
            <Bar style={barStyle}/>
        </Wrapper>
    );
}

export default ProgressBar;
