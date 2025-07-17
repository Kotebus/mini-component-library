import {type ComponentProps, type CSSProperties} from 'react';
import styled from 'styled-components';
import {type Icon, Search} from 'react-feather';

import {COLORS} from '../../constants';
import VisuallyHidden from "../VisuallyHidden";

export type IconInputSize = 'small' | 'large';

interface IIconInputProps extends ComponentProps<'input'>{
    label: string;
    icon?: Icon;
    width?: number;
    inputSize: IconInputSize;
}

const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    
    &:focus {
        outline: solid 6px orange; outline-offset: 3px
    }
`;

const TextInput = styled.input`
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
                       inputSize = 'small',
                       placeholder = 'Search...',
                        ...delegated
                   }: IIconInputProps) => {

    const isSmall = inputSize === 'small';
    const commonStyles: CSSProperties = {
        width: width,
        height: (isSmall ? 24/16 : 36/16) + 'rem',
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
            <TextInput
                style={{
                    fontSize: (isSmall ? 1 : (18 / 16)) + 'rem',
                    padding: 0,
                    paddingLeft: isSmall ? 16 + 8 : 24 + 12,
                    ...commonStyles,
                }}
                placeholder={placeholder}
                {...delegated}
            />
        </InputWrapper>
    );
};

export default IconInput;
