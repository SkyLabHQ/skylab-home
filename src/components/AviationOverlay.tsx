import {
    Box,
    Heading,
    Image,
    Portal,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    Flex,
    Button,
    HStack,
} from "@chakra-ui/react";
import React, { FC, MouseEventHandler, useState } from "react";
import styled from "@emotion/styled";

import CloseIcon from "../assets/close.svg";
import OverlayTop from "../assets/aviation-overlay-top-vector.svg";
import ColorfulOverlayTop from "../assets/aviation-overlay-colorful-top-vector.svg";
import ColorfulOverlay1 from "../assets/aviation-overlay-colorful-vector-1.svg";
import ColorfulOverlay2 from "../assets/aviation-overlay-colorful-vector-2.svg";
import mintTimeline from "../assets/mint-timeline.svg";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import { AviationConfig } from "../pages/Mint";
import { useNavigate } from "react-router-dom";
import { bttHomeUrl } from "@/skyConstants";

export type AviationOverlayProps = {
    config: AviationConfig;
    onOverlayClose: () => void;
};

const Overlay = styled(Box)`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0.5)
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
`;

const CloseButton = styled(Box)`
    width: 32px;
    height: 32px;
`;

export const AviationOverlay: FC<AviationOverlayProps> = ({
    onOverlayClose,
    config,
}) => {
    const navigate = useNavigate();
    const { account } = useActiveWeb3React();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showGameType, setShowGameType] = useState(false);
    const {
        level,
        img,
        description: { text, author, fontSize: descriptionFontSize },
    } = config;
    const isNewLayout = level === 1;

    const onOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        onOverlayClose();
    };

    const onChooseGame = () => {
        setShowGameType(true);
    };

    const handleToTraiblazers = () => {
        window.open(bttHomeUrl);
    };

    return (
        <Portal>
            <Overlay pos="relative" onClick={onOverlayClick}>
                <Image
                    src={isNewLayout ? ColorfulOverlayTop : OverlayTop}
                    w="15vw"
                    h="6vw"
                    pos="absolute"
                    top="70vw"
                    left="3vw"
                />
                <Box pos="relative" top="75vw">
                    <CloseButton
                        onClick={onOverlayClose}
                        bgImage={CloseIcon}
                        top="0"
                        right="3.5vw"
                        pos="absolute"
                        cursor="pointer"
                    />
                    <Heading
                        fontSize="128px"
                        fontWeight="700"
                        paddingLeft="5vw"
                        onClick={onOverlayClose}
                    >
                        Level{level}
                    </Heading>
                    <Box
                        padding="0 5vw"
                        marginTop="2vw"
                        pos={isNewLayout ? "absolute" : "relative"}
                        top={isNewLayout ? "27vw" : "initial"}
                        maxW={isNewLayout ? "43vw" : "none"}
                    >
                        <Text fontSize={descriptionFontSize ?? "40px"}>
                            {text}
                        </Text>
                        <Text fontSize="28px" textAlign="right" mt="8px">
                            -- {author}
                        </Text>
                    </Box>
                    {isNewLayout ? (
                        <Box
                            w="82vw"
                            height="44vw"
                            pos="absolute"
                            left="17vw"
                            top="8vw"
                            overflow="hidden"
                        >
                            <Image
                                pos="absolute"
                                src={ColorfulOverlay1}
                                w="30vw"
                                h="16vw"
                            />
                            <Image
                                pos="absolute"
                                src={ColorfulOverlay2}
                                w="45vw"
                                h="7vw"
                                top="1.5vw"
                                left="46vw"
                            />
                            <Image
                                pos="absolute"
                                src={img}
                                w="44vw"
                                h="44vw"
                                top="-13vw"
                                left="14vw"
                            />
                        </Box>
                    ) : (
                        <Box
                            w="52vw"
                            height="30vw"
                            pos="absolute"
                            left={isNewLayout ? "28vw" : "3vw"}
                            top={isNewLayout ? "1vw" : "initial"}
                        >
                            <Image src={img} w="100%" h="100%" />
                        </Box>
                    )}
                    <Box
                        w="38vw"
                        pos="absolute"
                        left="56vw"
                        top={isNewLayout ? "22vw" : "initial"}
                    >
                        {isNewLayout ? (
                            <Box
                                pos="relative"
                                top={showGameType ? "10vh" : "15vh"}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    w="100%"
                                    fontSize="36px"
                                    paddingTop="16px"
                                    paddingBottom="16px"
                                    height="auto"
                                    borderRadius="15px"
                                    onClick={() => {
                                        if (!showGameType) {
                                            onChooseGame();
                                        } else {
                                            handleToTraiblazers();
                                        }
                                    }}
                                    borderColor={
                                        showGameType ? "#FFAD29" : "white"
                                    }
                                    color={showGameType ? "#FF9029" : "white"}
                                    bg={
                                        showGameType
                                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #FFAD29 100%)"
                                            : "transparent"
                                    }
                                    cursor={"pointer"}
                                    _hover={{
                                        bg: showGameType
                                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #FFAD29 100%)"
                                            : "whiteAlpha.200",
                                    }}
                                    _focus={{
                                        bg: showGameType
                                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #FFAD29 100%)"
                                            : "whiteAlpha.200",
                                    }}
                                >
                                    Start Game
                                </Button>
                                {showGameType ? (
                                    <HStack spacing="16px" pt="16px">
                                        <Button
                                            onClick={handleToTraiblazers}
                                            variant="outline"
                                            colorScheme="teal"
                                            flexDir="column"
                                            fontSize="24px"
                                            paddingTop="8px"
                                            paddingBottom="8px"
                                            height="auto"
                                            borderRadius="15px"
                                            flex="1"
                                            _hover={{
                                                backgroundColor: "#13FFDA",
                                                color: "black",
                                            }}
                                        >
                                            <Text>Test Flight</Text>
                                            <Text>(Freemium Version)</Text>
                                        </Button>
                                        <Button
                                            onClick={handleToTraiblazers}
                                            variant="outline"
                                            colorScheme="yellow"
                                            flexDir="column"
                                            fontSize="24px"
                                            paddingTop="8px"
                                            paddingBottom="8px"
                                            height="auto"
                                            borderRadius="15px"
                                            flex="1"
                                            _hover={{
                                                backgroundColor: "#FFF530",
                                                color: "black",
                                            }}
                                        >
                                            <Text>Set Off</Text>
                                            <Text>(Real Version)</Text>
                                        </Button>
                                    </HStack>
                                ) : null}
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    marginTop="16px"
                                    width="36vw"
                                >
                                    <Text fontSize="16px" marginTop="6px">
                                        &bull;
                                    </Text>
                                    <Text fontSize="24px" marginLeft="4px">
                                        Only{" "}
                                        <Text
                                            as="span"
                                            color="rgba(19, 255, 218, 1)"
                                        >
                                            Level 1
                                        </Text>{" "}
                                        vehicles can be minted directly
                                    </Text>
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    marginTop="8px"
                                    width="36vw"
                                >
                                    <Text fontSize="16px" marginTop="6px">
                                        &bull;
                                    </Text>
                                    <Text fontSize="24px" marginLeft="4px">
                                        <Text
                                            as="span"
                                            color="rgba(19, 255, 218, 1)"
                                        >
                                            Higher level
                                        </Text>{" "}
                                        vehicles can only be minted when{" "}
                                        <Text
                                            as="span"
                                            color="rgba(19, 255, 218, 1)"
                                        >
                                            being upgraded
                                        </Text>{" "}
                                        in the game
                                    </Text>
                                </Box>
                            </Box>
                        ) : (
                            <Box
                                w="100%"
                                pos="relative"
                                overflow="visible"
                                top="10vh"
                            >
                                <Box w="100%">
                                    <Image
                                        src={mintTimeline}
                                        objectFit="cover"
                                        w="full"
                                    />
                                </Box>
                                <Flex
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    pos="absolute"
                                    top="10vw"
                                    left="23%"
                                    w="20vw"
                                    whiteSpace="nowrap"
                                >
                                    <Text
                                        display="inline"
                                        fontSize="2.5vw"
                                        textShadow="0px 4px 4px #FF2927"
                                    >
                                        2023
                                    </Text>
                                    <Text
                                        display="inline"
                                        fontSize="2.5vw"
                                        textShadow="0px 4px 4px #FF2927"
                                    >
                                        Season 1 Launch
                                    </Text>
                                </Flex>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Overlay>
        </Portal>
    );
};
