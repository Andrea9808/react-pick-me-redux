import { space, layout, border, flexbox, color, position, compose } from "styled-system";

import styled from "styled-components";

import {css} from '@styled-system/css';

const StackWrapper = styled("div")(

    ({
        childrenMarginTop,
        childrenMarginBottom,
        childrenMarginLeft,
        childrenMarginRight,
        align,
        justify,
        direction

    }) => css({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
       "& > * + *": {
           marginTop: childrenMarginTop,
           marginBottom: childrenMarginBottom,
           marginLeft: childrenMarginLeft,
           marginRight: childrenMarginRight,
        }
    }),
    compose(flexbox, space, layout, border, color, position)
);


const Stack = ({
    align,
    justify,
    direction = 'row',
    spacing,
    children,
    ...rest
}) => {
    return (
        <StackWrapper
           {...rest}
           align={align}
            justify={justify}
            direction={direction}
            childrenMarginTop={direction === 'column' ? spacing : 0}
            childrenMarginBottom={direction === 'column-reverse' ? spacing : 0}
            childrenMarginLeft={direction === 'row' ? spacing : 0}
            childrenMarginRight={direction === 'row-reverse' ? spacing : 0}

        >
            {children}
        </StackWrapper>
    );
}

export default Stack;