import React from "react";
import { StatusBar } from "react-native";
import { Container, Teste } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "../../Components/Header";
import { Text } from "react-native";

export const Home = () => {
  return (
    <>
      <StatusBar />
      <Container>
        <Header />
        {/* <Teste>asd</Teste> */}
      </Container>
    </>
  );
};
