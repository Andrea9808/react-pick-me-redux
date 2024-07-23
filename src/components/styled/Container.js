import styled from "styled-components";

import {space, layout, background, border, position, compose, variant, maxWidth, width} from 'styled-system'


const Container = styled("div")(

    variant({
        prop:"size",
        variants:{
            fullwidth: {
                width: "100%",
                maxWidth: "100%",
            },
            xl:{
                maxWidth: "1140px",
                width: "calc(100% - 48px)",
            },
            md: {
                maxWidth : "768px",
                width: "calc(100% - 24px)",
            },
            sm: {
                maxWidth: "568px",
                width: "calc(100% - 12px)",
            },
            xs:{
                maxWidth: "440px",
                width: "calc(100% - 6px)",
            }
        }
    }),
    compose(space, layout, background, border, position, maxWidth, width)
)

Container.defaultProps = {
    ml: 'auto',
    mr: 'auto',
    size: 'xl',
}

export default Container;