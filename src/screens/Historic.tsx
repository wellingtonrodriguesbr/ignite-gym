import { VStack } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoricCard } from "@components/HistoricCard";

export function Historic() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
      <VStack px={8} mt={4}>
        <HistoricCard />
      </VStack>
    </VStack>
  );
}
