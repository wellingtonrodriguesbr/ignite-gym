import { VStack, Image } from "native-base";
import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Uma mulher e um homem pedalando em uma bicicleta ergométrica na academia"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
}
