import { SafeAreaView, StatusBar, Text } from 'react-native';
import Carrinho from './src/pages/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
        <Carrinho/>
    </SafeAreaView>
  );
}

