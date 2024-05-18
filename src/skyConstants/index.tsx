import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected } from "../utils/web3Utils";
import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import { css } from "@emotion/react";
import githubLogo from "../assets/github.svg";
import discordLogo from "../assets/discord.svg";
import twitterLogo from "../assets/twitter.svg";
import telegramLogo from "../assets/telegram.svg";
import mirrorLogo from "../assets/mirror.svg";

export const PolygonIcon = createIcon({
    displayName: "Polygon Network",
    viewBox: "0 0 38.4 33.5",
    path: (
        <path
            fill="#8247E5"
            d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3 c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7 c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1 L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
        />
    ),
});

export const MetamaskIcon = createIcon({
    displayName: "Metamask Logo",
    viewBox: "0 0 318.6 318.6",
    path: (
        <>
            <style type="text/css">
                {
                    ".st0{fill:#E2761B;stroke:#E2761B;stroke-linecap:round;stroke-linejoin:round;} .st1{fill:#E4761B;stroke:#E4761B;stroke-linecap:round;stroke-linejoin:round;} .st2{fill:#D7C1B3;stroke:#D7C1B3;stroke-linecap:round;stroke-linejoin:round;} .st3{fill:#233447;stroke:#233447;stroke-linecap:round;stroke-linejoin:round;} .st4{fill:#CD6116;stroke:#CD6116;stroke-linecap:round;stroke-linejoin:round;} .st5{fill:#E4751F;stroke:#E4751F;stroke-linecap:round;stroke-linejoin:round;} .st6{fill:#F6851B;stroke:#F6851B;stroke-linecap:round;stroke-linejoin:round;} .st7{fill:#C0AD9E;stroke:#C0AD9E;stroke-linecap:round;stroke-linejoin:round;} .st8{fill:#161616;stroke:#161616;stroke-linecap:round;stroke-linejoin:round;} .st9{fill:#763D16;stroke:#763D16;stroke-linecap:round;stroke-linejoin:round;}"
                }
            </style>
            <polygon
                className="st0"
                points="274.1,35.5 174.6,109.4 193,65.8 "
            />
            <g>
                <polygon
                    className="st1"
                    points="44.4,35.5 143.1,110.1 125.6,65.8 	"
                />
                <polygon
                    className="st1"
                    points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7 	"
                />
                <polygon
                    className="st1"
                    points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8 	"
                />
                <polygon
                    className="st1"
                    points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1 	"
                />
                <polygon
                    className="st1"
                    points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1 	"
                />
                <polygon
                    className="st1"
                    points="106.8,247.4 140.6,230.9 111.4,208.1 	"
                />
                <polygon
                    className="st1"
                    points="177.9,230.9 211.8,247.4 207.1,208.1 	"
                />
            </g>
            <g>
                <polygon
                    className="st2"
                    points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3 	"
                />
                <polygon
                    className="st2"
                    points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9 	"
                />
            </g>
            <polygon
                className="st3"
                points="138.8,193.5 110.6,185.2 130.5,176.1 "
            />
            <polygon
                className="st3"
                points="179.7,193.5 188,176.1 208,185.2 "
            />
            <g>
                <polygon
                    className="st4"
                    points="106.8,247.4 111.6,206.8 80.3,207.7 	"
                />
                <polygon
                    className="st4"
                    points="207,206.8 211.8,247.4 238.3,207.7 	"
                />
                <polygon
                    className="st4"
                    points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2 	"
                />
                <polygon
                    className="st4"
                    points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1 	"
                />
            </g>
            <g>
                <polygon
                    className="st5"
                    points="87.8,162.1 111.4,208.1 110.6,185.2 	"
                />
                <polygon
                    className="st5"
                    points="208.1,185.2 207.1,208.1 230.8,162.1 	"
                />
                <polygon
                    className="st5"
                    points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7 	"
                />
                <polygon
                    className="st5"
                    points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5 	"
                />
            </g>
            <polygon
                className="st6"
                points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 "
            />
            <polygon
                className="st6"
                points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 "
            />
            <polygon
                className="st7"
                points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4
	140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 "
            />
            <polygon
                className="st8"
                points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 "
            />
            <g>
                <polygon
                    className="st9"
                    points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4
		281.8,129.1 275.6,124.3 283.6,118.2 	"
                />
                <polygon
                    className="st9"
                    points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2
		140.6,106.9 44.4,35.5 	"
                />
            </g>
            <polygon
                className="st6"
                points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 "
            />
            <polygon
                className="st6"
                points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 "
            />
            <polygon
                className="st6"
                points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6
	173.1,227.6 173.3,182.8 "
            />
        </>
    ),
});

/** SUPPORTED WALLETS */
export type WalletData = {
    name: string;
    Icon: ComponentWithAs<"svg", IconProps>;
    connector: AbstractConnector;
};
export type SupportedWallets = "METAMASK";
export const SUPPORTED_WALLETS: {
    [supportedWallet in SupportedWallets]: WalletData;
} = {
    METAMASK: {
        name: "MetaMask",
        Icon: MetamaskIcon,
        connector: injected,
    },
};

export const CHAIN_ID_MAP: { [key: number]: string } = {
    "-1": "unknown",
    0: "kardia",
    1: "ethereum",
    8: "ubiq",
    10: "optimism",
    19: "songbird",
    20: "elastos",
    25: "cronos",
    30: "rsk",
    40: "telos",
    52: "csc",
    55: "zyx",
    56: "binance",
    57: "syscoin",
    60: "gochain",
    61: "ethclassic",
    66: "okexchain",
    70: "hoo",
    82: "meter",
    88: "tomochain",
    100: "xdai",
    106: "velas",
    108: "thundercore",
    122: "fuse",
    128: "heco",
    137: "polygon",
    200: "xdaiarb",
    246: "energyweb",
    250: "fantom",
    269: "hpb",
    288: "boba",
    321: "kucoin",
    336: "shiden",
    361: "theta",
    534: "candle",
    592: "astar",
    820: "callisto",
    888: "wanchain",
    1088: "metis",
    1284: "moonbeam",
    1285: "moonriver",
    2020: "ronin",
    2612: "ezchain",
    4689: "iotex",
    5050: "xlc",
    5551: "nahmii",
    8217: "klaytn",
    10000: "smartbch",
    32659: "fusion",
    42161: "arbitrum",
    42220: "celo",
    42262: "oasis",
    43114: "avalanche",
    71394: "godwoken",
    333999: "polis",
    1313161554: "aurora",
    1666600000: "harmony",
    11297108109: "palm",
    836542336838601: "curio",
};

export const GlobalStyles = css`
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: white;
        background: black;
    }
    a:active,
    a:focus {
        box-shadow: none !important;
    }
    a.underline {
        display: block;
        position: relative;
        overflow: hidden;
    }
    a.underline:hover {
        text-decoration: none !important;
    }
    a.underline:hover::after,
    a.underline:focus::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    a.underline::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.2em;
        background-color: var(--chakra-colors-blue-500);
        transition: opacity 600ms, transform 300ms;
        transform: translate3d(-100%, 0, 0);
    }
`;

export const LOGOS = [
    {
        logo: mirrorLogo,
        url: "https://mirror.xyz/0xD0f899a62aC7ED1b4A145a111ae42D23f4cc2919",
    },
    { logo: twitterLogo, url: "https://twitter.com/skylabHQ" },
    { logo: githubLogo, url: "https://github.com/SkyLabHQ" },
    { logo: discordLogo, url: "https://discord.gg/qWxPz8Qr87" },
    { logo: telegramLogo, url: "https://t.me/skylabHQ" },
    // { logo: mediumLogo, url: "" },
    // { logo: openseaLogo, url: "" },
];

export const BOX_VARIANTS = {
    open: {
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

export const LIST_VARIANTS: Variants = {
    open: {
        opacity: 1,
        display: "flex",
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
    closed: {
        opacity: 0,
        display: "none",
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const LIST_ITEM_VARIANTS: Variants = {
    open: {
        opacity: 1,
        backdropFilter: "blur(100px)",
    },
    closed: {
        opacity: 0,
    },
};

export const bttHomeUrl = "https://www.bidtactoe.io";
