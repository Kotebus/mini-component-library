import {type CSSProperties} from 'react';
import styled from 'styled-components';
import {type Icon, Search} from 'react-feather';

import {COLORS} from '../../constants';
import VisuallyHidden from "../VisuallyHidden";

export type IconInputSize = 'small' | 'large';

interface IIconInputProps {
    label: string;
    icon?: Icon;
    width?: number;
    size: IconInputSize;
    placeholder?: string;
}

const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    
    &:focus {
        outline: solid 6px orange; outline-offset: 3px
    }
`;

const NativeInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1;
    color: ${COLORS.gray700};
    
    &::placeholder {
        font-weight: 400;
        color: ${COLORS.gray500};
    }
    
    &:hover {
        color: ${COLORS.black};
    }
`;

const IconInput = ({
                       label,
                       icon: IconTag = Search,
                       width = 250,
                       size,
                       placeholder = 'Search...',
                   }: IIconInputProps) => {

    const isSmall = size === 'small';
    const commonStyles: CSSProperties = {
        width: width,
        height: isSmall ? 24 : 36,
        borderWidth: isSmall ? 1 : 2,
        border: 'none',
        borderBottomStyle: 'solid',
    };

    return (
        <InputWrapper style={{
            ...commonStyles,
        }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconTag
                color={COLORS.gray500}
                size={isSmall ? 16 : 24}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: isSmall ? 4 : 6,
                    bottom: 4,
                    pointerEvents: 'none',
                }}
            />
            <NativeInput
                style={{
                    fontSize: (isSmall ? 1 : (18 / 16)) + 'rem',
                    padding: 0,
                    paddingLeft: isSmall ? 16 + 8 : 24 + 12,
                    ...commonStyles,
                }}
                placeholder={placeholder}
            />
        </InputWrapper>
    );
};

export default IconInput;
