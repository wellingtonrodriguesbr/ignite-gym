import { Pressable, IPressableProps, Text } from "native-base";

interface GroupProps extends IPressableProps {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...props }: GroupProps) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      rounded="md"
      bg="gray.600"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...props}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
