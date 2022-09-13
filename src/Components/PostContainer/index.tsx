import { Container, PostPhoto } from "./styles";

export const PostContainer = () => {
  return (
    <Container>
      <PostPhoto
        source={{
          uri: "https://pbs.twimg.com/profile_images/1533805208219881474/TQ4AaUXz_400x400.jpg",
        }}
      />
    </Container>
  );
};
