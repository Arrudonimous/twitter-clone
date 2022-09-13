import { Container, Item } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = () => {
  return (
    <Container>
      <Item
        style={{ borderRadius: 20, width: 30, height: 30 }}
        source={{
          uri: 'https://static.wikia.nocookie.net/gameofthrones/images/d/da/Jon_Snow_perfil_2.jpg/revision/latest/top-crop/width/360/height/360?cb=20220217225407&path-prefix=pt-br',
        }}
      ></Item>

      <Icon name="ios-logo-twitter" size={25} color="#00acee" />

      <Item
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        }}
      ></Item>
    </Container>
  );
};
