import { Heading, HStack, Icon } from "@chakra-ui/react";
import { GiCubeforce } from "react-icons/gi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding={"10px "}
      boxShadow={"md"}
      position={"sticky"}
      marginBottom={"10px"}
      bgImage={"linear-gradient(-90deg,rgb(42, 48, 61) 0%,rgb(52, 49, 24) 100%)"}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {/* <Image src={logo} boxSize="60px"></Image> */}
        <Icon as={GiCubeforce} boxSize={"60px"} color={"yellow.500"} border={"2px"}></Icon>
        <Heading fontSize={"2xl"} marginLeft={5} color={"yellow.500"}>
          Game Hub
        </Heading>
      </span>
      <SearchInput onSearch={onSearch} />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
