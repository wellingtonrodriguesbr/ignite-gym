import { IInputProps, Input as NativeBaseInput } from "native-base";

export function Input({ ...props }: IInputProps) {
  return (
    <NativeBaseInput
      backgroundColor="gray.700"
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      h={14}
      px={4}
      placeholderTextColor="gray.300"
      _focus={{
        backgroundColor: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...props}
    />
  );
}
