import {
    Button,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Stack,
    Text,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { PolygonIcon } from "../skyConstants";
import useAddNetworkToMetamask from "../hooks/useAddNetworkToMetamask";
import { ChainId } from "../utils/web3Utils";

const UnsupportedNetwork = (): ReactElement => {
    // hooks
    const addNetworkToMetask = useAddNetworkToMetamask();

    return (
        <>
            <ModalHeader fontSize="x-large">Supported Networks</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing="20px" p="10px">
                    <Text fontSize="lg">
                        Please connect to the Polygon network.
                    </Text>
                    <Button
                        w="full"
                        onClick={() => addNetworkToMetask(ChainId.BASE)}
                        leftIcon={<PolygonIcon boxSize="27px" />}
                        variant="solid"
                    >
                        Switch to Polygon Network
                    </Button>
                </Stack>
            </ModalBody>
        </>
    );
};

export default UnsupportedNetwork;
