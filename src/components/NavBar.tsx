import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/p1.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"10px "}
      boxShadow={"md"}
      position={"sticky"}
      marginBottom={"10px"}
      blur={2}
      opacity={0.8}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <Image src={logo} boxSize="60px"></Image>
        <Heading fontSize={"2xl"} marginLeft={5}>
          Game Hub
        </Heading>
      </span>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
