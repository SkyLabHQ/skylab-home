import "./SupportedNetworks.css";

import {
    Box,
    Center,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { PolygonIcon } from "../skyConstants";

const SupportedNetworks = (): ReactElement => {
    return (
        <React.Fragment>
            <ModalHeader mt="20px" fontSize="24px" textAlign="center">
                You are connected to the Polygon Network
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Center w="full" minH="100px">
                    <Box className="stage" pos="relative">
                        <motion.figure
                            className="ball"
                            drag
                            dragConstraints={{
                                top: -20,
                                left: -90,
                                right: 90,
                                bottom: 20,
                            }}
                        >
                            <PolygonIcon
                                top="50%"
                                left="50%"
                                zIndex={5}
                                transform="translate(-50%, -50%)"
                                pos="absolute"
                                fontSize="45px"
                            />
                            <span className="shadow"></span>
                        </motion.figure>
                    </Box>
                </Center>
            </ModalBody>
        </React.Fragment>
    );
};

export default SupportedNetworks;
