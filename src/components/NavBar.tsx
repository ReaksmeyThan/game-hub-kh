import { Heading, HStack, Icon } from "@chakra-ui/react";
import { FaCubesStacked } from "react-icons/fa6";
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
        {/* <Image src={logo} boxSize="60px"></Image> */}
        <Icon
          as={FaCubesStacked}
          boxSize={"60px"}
          color={"yellow.500"}
          border={"2px"}
        ></Icon>
        <Heading fontSize={"2xl"} marginLeft={5} color={"yellow.500"}>
          Game Hub
        </Heading>
      </span>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
