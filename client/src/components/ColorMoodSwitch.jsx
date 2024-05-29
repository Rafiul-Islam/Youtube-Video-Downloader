import {
  FormControl,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const ColorMoodSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack display="flex" justifyContent="flex-end" mb="16">
      <HStack display="flex" alignItems="center">
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
        <Text textTransform="capitalize" ml="1">
          {colorMode} Mood
        </Text>
      </HStack>
    </HStack>
  );
};

export default ColorMoodSwitch;
