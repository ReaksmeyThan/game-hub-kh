import useGameQueryStore from "@/store";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate('/');
      }}
    >
      <InputGroup>
        <InputLeftElement color={"yellow.500"} borderColor={"yellow.500"} />
        <Input ref={ref} placeholder="Search games" variant={"filled"} borderRadius={20} borderColor={"yellow.500"} color={"yellow.600"} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
