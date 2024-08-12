import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { HashRouter } from "react-router-dom";
import { GlobalStyles } from "./skyConstants";
import AppRoutes, { ScrollToTop } from "./Routes";
import theme from "./theme";

import { KnobVisibilityContextProvider } from "./contexts/KnobVisibilityContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <Box>
        <ColorModeScript />
        <ChakraProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <HashRouter>
                <KnobVisibilityContextProvider>
                    <Fragment>
                        <ScrollToTop />
                        <AppRoutes />
                    </Fragment>
                </KnobVisibilityContextProvider>
            </HashRouter>
        </ChakraProvider>
    </Box>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
