import React from "react";
import { StatusBar } from "react-native";
import { Container, Teste, Scroll } from "./styles";
import { Header } from "../../Components/Header";
import { PostContainer } from "../../Components/PostContainer";

export const Home = () => {
  const posts = [
    {
      photo: "https://picsum.photos/200/300",
      name: "John Doe",
      username: "@johndoe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 10,
      comments: 5,
      retweets: 10,
      time: "1h",
    },
  ];

  return (
    <>
      <StatusBar />
      <Container>
        <Header />
        <Scroll>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1533805208219881474/TQ4AaUXz_400x400.jpg"
            name="malu"
            username="maalufdias"
            time="1d"
            content="amo meu namorado"
            comments={13305}
            retweets={150000}
            likes={18000}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1555014292562403335/ryAd1IE-_400x400.jpg"
            name="𝔸𝕣𝕣𝕦𝕕𝕒"
            username="Arrudonimous"
            time="32s"
            content="Amo minha namorada"
            comments={12001}
            retweets={12001}
            likes={1123123123}
          ></PostContainer>
        </Scroll>
      </Container>
    </>
  );
};
