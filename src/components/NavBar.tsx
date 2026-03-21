import { Heading, HStack, Icon } from "@chakra-ui/react";
import { GiCubeforce } from "react-icons/gi";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      padding={"10px "}
      boxShadow={"md"}
      position={"sticky"}
      marginBottom={"10px"}
      bgImage={"linear-gradient(-90deg,rgb(42, 48, 61) 0%,rgb(52, 49, 24) 100%)"}
    >
      <HStack>
        <Link to={"/"}>
          <HStack>
            <Icon as={GiCubeforce} boxSize={"60px"} color={"yellow.500"} />
            <Heading fontSize={"2xl"} color={"yellow.500"}>
              Game Hub
            </Heading>
          </HStack>
        </Link>
      </HStack>
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
