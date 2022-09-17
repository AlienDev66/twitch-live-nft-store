import { ReactNode } from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface HomeProps {
  children: ReactNode;
}

export function Home({ children }: HomeProps) {
  return (
    <Container>
      <Text>Home</Text>
      {children}
    </Container>
  );
}
