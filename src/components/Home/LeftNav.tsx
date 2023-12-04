import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Layer1 from "@/components/Home/assets/layer1.png";
import Layer2 from "@/components/Home/assets/layer3.png";
import Layer3 from "@/components/Home/assets/layer2.png";
import UpButton from "@/components/Home/assets/up-button.svg";
import MComponent from "@/components/Home/assets/mcomponent.png";
import DotIcon from "@/components/Home/assets/dash.svg";
import { useNavigate } from "react-router-dom";
import { bttHomeUrl } from "@/skyConstants";

const menu = [
    {
        name: "Games",
        value: "games",
        img: Layer1,
    },
    {
        name: "Primitives",
        value: "primitives",
        img: Layer2,
    },
    {
        name: "Sky Lab",
        value: "skylab",
        img: Layer3,
    },
];
const LeftNav = () => {
    const [active, setActive] = React.useState(menu[0].value);
    const [showBt, setShowBt] = React.useState(false);
    const [radio, setRadio] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const totalPageHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;
        const displayedHeight = window.pageYOffset || window.scrollY;
        const currentHeight = displayedHeight + viewportHeight;

        const radio = Math.min(
            Math.ceil((currentHeight / totalPageHeight) * 100),
            100,
        );
        setRadio(radio);

        const sections = menu.map((item) => {
            return document.getElementById(item.value);
        });
        let animationFrameId: number | null = null;
        window.addEventListener("scroll", () => {
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(() => {
                    const viewportHeight = window.innerHeight;
                    const displayedHeight =
                        window.pageYOffset || window.scrollY;
                    const currentHeight = displayedHeight + viewportHeight;

                    const radio = Math.min(
                        Math.ceil((currentHeight / totalPageHeight) * 100),
                        100,
                    );

                    setRadio(radio);

                    animationFrameId = null; // 重置 animationFrameId
                });
            }

            // 获取当前滚动位置
            const currentScrollPos = window.scrollY;
            // 检查每个内容块，找到与当前滚动位置相符的块
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (
                    currentScrollPos >= sectionTop &&
                    currentScrollPos < sectionBottom
                ) {
                    setActive(menu[index].value);
                }

                if (index === 0) {
                    if (currentScrollPos > sectionTop) {
                        setShowBt(true);
                    } else {
                        setShowBt(false);
                    }
                }
            });
        });
        return () => {
            window.removeEventListener("scroll", () => {});
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);
    return (
        <Box
            sx={{
                position: "fixed",
                left: "20px",
                top: "10vh",
                zIndex: "100",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Image
                    src={menu.find((item) => item.value === active)?.img}
                    w={"70px"}
                    sx={{ marginRight: "10px" }}
                ></Image>
                <Box>
                    {menu.map((item) => {
                        return (
                            <Box
                                key={item.value}
                                sx={{
                                    color:
                                        active === item.value
                                            ? "#FFF"
                                            : "#ffffff80",
                                    cursor: "pointer",
                                    fontSize: "20px",
                                }}
                                onClick={() => {
                                    const targetDiv = document.getElementById(
                                        item.value,
                                    );
                                    targetDiv.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {item.name}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    width: "70px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "calc(100vh - 350px)",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        background: `url(${DotIcon})`,
                        width: "40px",
                        backgroundRepeat: "repeat-y",
                        backgroundPosition: "center 0",
                    }}
                ></Box>
                <Box
                    sx={{
                        border: "2px solid #FFEEB5",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                    }}
                ></Box>
                <Box
                    sx={{
                        width: "4px",
                        height: 100 - radio + "%",
                        transition: "height 0.5s",
                        background: "#FFEEB5",
                        marginTop: "3px",
                        borderRadius: "5px",
                    }}
                ></Box>
                <Image
                    src={UpButton}
                    onClick={() => {
                        const targetDiv = document.getElementById("home");
                        targetDiv.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    sx={{ width: "38px", cursor: "pointer", marginTop: "10px" }}
                ></Image>
            </Box>
            {showBt && (
                <Image
                    src={MComponent}
                    sx={{
                        marginTop: "20px",
                        width: "200px",
                        cursor: "pointer",
                    }}
                    w={"100%"}
                    onClick={() => {
                        window.open(bttHomeUrl);
                    }}
                ></Image>
            )}
        </Box>
    );
};

export default LeftNav;
