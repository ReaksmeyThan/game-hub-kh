import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformID?: number;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatformID }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformID);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
