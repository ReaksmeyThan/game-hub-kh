import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} color={"yellow.500"} borderColor={"yellow.500"} />
        <Input ref={ref} placeholder="Search games" variant={"filled"} borderRadius={20} borderColor={"yellow.500"} color={"yellow.600"} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
