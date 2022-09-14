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
            time="1s"
            content="amo meu namorado"
            comments={13305}
            retweets={13305}
            likes={13305}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1555014292562403335/ryAd1IE-_400x400.jpg"
            name="𝔸𝕣𝕣𝕦𝕕𝕒"
            username="Arrudonimous"
            time="10s"
            content="Amo minha namorada"
            comments={1200000}
            retweets={1200000}
            likes={1200000}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1535051202467069972/Nal99vZg_400x400.jpg"
            name="3,14res"
            username="xicarass"
            time="23h"
            content="Vtnc bolsonaro hahahahaha"
            comments={100000}
            retweets={100000}
            likes={100000}
          ></PostContainer>

          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1540437973883387906/UuZKDrYq_400x400.jpg"
            name="Uluketa"
            username="Uluketa"
            time="1w"
            content="Odeio o William Carlos Galvão"
            comments={20000}
            retweets={20000}
            likes={20000}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1533801521611161601/D4WE4wVB_400x400.jpg"
            name="gabs ツ"
            username="aGaribelaa"
            time="12m"
            content="Eu sou tdd"
            comments={20000}
            retweets={20000}
            likes={20000}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1564029553290395654/e_ZQiEw__400x400.jpg"
            name="julio | 📖: suicidas"
            username="_jwlio"
            time="12m"
            content="gosto de livro de romance"
            comments={1}
            retweets={1}
            likes={1}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1559375109609213954/H69EARpJ_400x400.jpg"
            name="Lula 13"
            username="LulaOficial"
            time="12h"
            content="qual foi @jairbolsonaro vamo ir um x1 no Fortnite"
            comments={2200000}
            retweets={2200000}
            likes={2200000}
          ></PostContainer>
          <PostContainer
            photo="https://pbs.twimg.com/profile_images/1559734581942800385/qtN3jE9H_400x400.jpg"
            name="Jair M. Bolsonaro"
            username="jairbolsonaro"
            time="12h"
            content="Eu vout e mata taokey? @LulaOficial"
            comments={1}
            retweets={1}
            likes={1}
          ></PostContainer>
        </Scroll>
      </Container>
    </>
  );
};
