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
`;

const BarWrapper = styled.div`
    border-radius: 3px;

    /* Trim off corners when progress bar is near-full. */
    overflow: hidden;
`

const Bar = styled.div`
    background-color: ${COLORS.primary};
    height: inherit;
    //border-radius: 2px 0 0 2px;
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
        height: HEIGHT_SIZE_MAP[size] - (size === 'large' ? 8 : 0),
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
            <BarWrapper>
                <Bar style={barStyle}/>
            </BarWrapper>
        </Wrapper>
    );
}

export default ProgressBar;
