import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  text: string;
  variant?: "solid" | "outline";
}

export function Button({ text, variant = "solid", ...props }: ButtonProps) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "transparent" : "green.500",
        borderColor: "green.900",
      }}
      {...props}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {text}
      </Text>
    </NativeBaseButton>
  );
}
