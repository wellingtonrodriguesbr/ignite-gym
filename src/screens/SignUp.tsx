import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignUp() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
        <Center>
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
            Crie sua conta
          </Heading>
          <Input secureTextEntry placeholder="Nome" />
          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="E-mail"
          />
          <Input secureTextEntry placeholder="Senha" />
          <Button text="Criar e acessar" />
        </Center>

        <Button
          text="Voltar para login"
          variant="outline"
          mt="16"
          onPress={() => navigate("signIn")}
        />
      </VStack>
    </ScrollView>
  );
}
