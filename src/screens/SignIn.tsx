import { VStack, Image, Text, Center, Heading } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Uma mulher e um homem pedalando em uma bicicleta ergométrica na academia"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Heading
        color="gray.100"
        mx="auto"
        mb={6}
        fontSize="xl"
        fontFamily="heading"
      >
        Acesse sua conta
      </Heading>
      <Input
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
      />
      <Input secureTextEntry placeholder="Senha" />
    </VStack>
  );
}
