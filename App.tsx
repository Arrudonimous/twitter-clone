import { Home } from './src/Screens/Home';
import { AppRoutes } from './src/Routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
