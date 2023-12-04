import { CheckIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Button,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Stack,
    Flex,
    ModalFooter,
    Text,
    useClipboard,
    Box,
    Link,
} from "@chakra-ui/react";
import { find } from "lodash";
import React, { ReactElement } from "react";
import { SUPPORTED_WALLETS } from "../skyConstants";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import useSwitchProfiles from "../hooks/useSwitchProfiles";
import { getBlockExplorerLink, shortenAddress } from "../utils";
import Identicon from "./Identicon";

interface AccountDetailsProps {
    onModalClose: () => void;
}

const AccountDetails = ({
    onModalClose,
}: AccountDetailsProps): ReactElement => {
    // hooks
    const { account, connector } = useActiveWeb3React();
    const { hasCopied, onCopy } = useClipboard(account ?? "", {
        timeout: 1000,
    });
    const switchProfiles = useSwitchProfiles();

    const wallet = find(SUPPORTED_WALLETS, ["connector", connector]);
    const WalletIcon = wallet?.Icon!;

    return (
        <>
            <ModalHeader fontSize="x-large">Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box p="5px">
                    <Stack spacing="5px">
                        <Flex alignItems="center" gridGap="7px">
                            <Text
                                mt="5px"
                                textAlign="center"
                                fontSize="13px"
                                color="whiteAlpha.600"
                                whiteSpace="nowrap"
                            >
                                Connected with {wallet?.name}
                            </Text>
                            <Box boxSize="20px">
                                <WalletIcon />
                            </Box>
                        </Flex>
                        <Flex alignItems="center" gridGap="10px">
                            <Flex
                                gridGap="3px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Identicon />
                                <Flex alignItems="center" gridGap="7px">
                                    <Text fontSize="18px">
                                        {account && shortenAddress(account)}
                                    </Text>
                                    <Link
                                        href={getBlockExplorerLink(
                                            account || "",
                                            "address",
                                        )}
                                        isExternal
                                    >
                                        <ExternalLinkIcon
                                            fontSize="15px"
                                            cursor="pointer"
                                        />
                                    </Link>
                                </Flex>
                            </Flex>
                            <Button
                                onClick={onCopy}
                                leftIcon={
                                    hasCopied ? <CheckIcon /> : <CopyIcon />
                                }
                                variant="ghost"
                            >
                                {hasCopied ? "Copied!" : "Copy wallet address"}
                            </Button>
                        </Flex>
                    </Stack>
                </Box>
            </ModalBody>
            <ModalFooter>
                {wallet?.name === "MetaMask" && (
                    <Box w="full" px="15px">
                        <Button
                            colorScheme="blue"
                            onClick={() => {
                                switchProfiles();
                                onModalClose();
                            }}
                            w="full"
                        >
                            Switch Accounts
                        </Button>
                    </Box>
                )}
            </ModalFooter>
        </>
    );
};

export default AccountDetails;
