import { Box, Heading, Image, Center, Portal } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

import { useKnobVisibility } from "../contexts/KnobVisibilityContext";
import { AviationConfig } from "../pages/Mint";
import { AviationOverlay } from "./AviationOverlay";

export type AviationProps = {
    config: AviationConfig;
    showAviationOverlay: number | undefined;
    setShowAviationOverlay: (level: number | undefined) => void;
    onPopup?: (visible: boolean) => void;
    changeBackgroundOnHover?: (hover: boolean) => void;
};

const AnimatedContainer = styled(Box)`
    &:hover {
        & .image-container {
            transform: scale(1.3)
                ${(props: any) => props.layout.image.transform};
            transition: ease 0.5s;
        }

        & .text-container {
            transform: translateY(2vw)
                ${(props: any) => props.layout.text.transform};
            transition: ease 0.5s;
        }
    }
`;

export const Aviation: FC<AviationProps> = ({
    config,
    onPopup,
    changeBackgroundOnHover,
    showAviationOverlay,
    setShowAviationOverlay,
}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const { setIsKnobVisible } = useKnobVisibility();

    const { level, layout, img } = config;
    const isNewLayout = level === 1;

    const onAviationClick = () => {
        if (isOverlayVisible) {
            return;
        }
        window.scrollTo({
            top: 0.75 * window.innerWidth - 50,
        });
        document.body.style.overflowY = "hidden";
        setIsKnobVisible(false);
        setIsOverlayVisible(true);
        onPopup?.(true);
    };

    const onOverlayClose = () => {
        // todo: scroll back to the position when overlay opens
        if (!isOverlayVisible) {
            return;
        }
        setShowAviationOverlay(undefined);
        document.body.style.overflowY = "inherit";
        setIsKnobVisible(true);
        setIsOverlayVisible(false);
        onPopup?.(false);
    };

    const onMouseOver = () => {
        if (isNewLayout) {
            changeBackgroundOnHover?.(true);
        }
    };

    const onMouseLeave = () => {
        if (isNewLayout) {
            changeBackgroundOnHover?.(false);
        }
    };

    useEffect(() => {
        if (showAviationOverlay === level) {
            onAviationClick();
        }
    }, [showAviationOverlay, level]);

    const content = (
        <AnimatedContainer
            pos={isNewLayout ? "absolute" : "relative"}
            top={layout.container.top}
            layout={layout}
            onClick={onAviationClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <Box
                w={layout.image.width}
                pos="absolute"
                left={layout.image.left}
                cursor="pointer"
                className="image-container"
                transform={layout.image.transform}
            >
                <Image src={img} w="100%" h="100%" />
            </Box>
            <Center
                pos="absolute"
                top={layout.text.top}
                left={layout.text.left}
                className="text-container"
                transform={layout.text.transform}
            >
                <Heading
                    fontSize={layout.text.fontSize}
                    fontFamily="Quantico"
                    fontWeight="700"
                    userSelect="none"
                >
                    Level{level}
                </Heading>
            </Center>
            {isOverlayVisible ? (
                <AviationOverlay
                    onOverlayClose={onOverlayClose}
                    config={config}
                />
            ) : null}
        </AnimatedContainer>
    );

    return isNewLayout ? <Portal>{content}</Portal> : content;
};
