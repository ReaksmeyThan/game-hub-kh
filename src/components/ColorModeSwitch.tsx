import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        size="sm"
        colorScheme="yellow"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Switch Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
