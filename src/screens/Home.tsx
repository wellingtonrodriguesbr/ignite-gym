import { useState } from "react";
import { HStack, VStack } from "native-base";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack mt={10} ml={8}>
        <Group
          name="costas"
          isActive={groupSelected === "costas"}
          onPress={() => setGroupSelected("costas")}
        />
        <Group
          name="peito"
          isActive={groupSelected === "peito"}
          onPress={() => setGroupSelected("peito")}
        />
      </HStack>
    </VStack>
  );
}
