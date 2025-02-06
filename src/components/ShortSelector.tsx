import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (shortOrder: string) => void;
  selectSortOrder: string;
}

const SortSelector = ({ onSelectedSortOrder, selectSortOrder }: Props) => {
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
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Rating",
    },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Sort by: "}
        {
          (selectSortOrder =
            shortOrder.find((order) => order.value === selectSortOrder)
              ?.label || "Relevance")
        }
      </MenuButton>
      <MenuList>
        {shortOrder.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectedSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
