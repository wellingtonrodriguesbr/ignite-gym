import { VStack } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";

export function Historic() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
    </VStack>
  );
}
