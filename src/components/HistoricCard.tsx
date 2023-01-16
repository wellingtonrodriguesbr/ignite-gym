import { Heading, HStack, Text, VStack } from "native-base";

export function HistoricCard() {
  return (
    <HStack
      bg="gray.600"
      rounded="md"
      px={5}
      py={4}
      mb={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack>
        <Heading color="white" fontSize="md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Remada alta
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
}
