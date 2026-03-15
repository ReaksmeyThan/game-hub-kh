import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {
  const shortOrder = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "-released",
      label: "Released",
    },
    {
      value: "-meteoritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Rating",
    },
  ];
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    
  const currentSortOrder = shortOrder.find((order) => order.value === sortOrder)?.label || "Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Sort by: "}
        {currentSortOrder}
      </MenuButton>
      <MenuList>
        {shortOrder.map((order) => (
          <MenuItem key={order.value} onClick={() => setSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
