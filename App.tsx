import { StatusBar, SafeAreaView } from 'react-native';

import { Home } from './src/screens/Home';
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#1F1F29' }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
        />
      </SafeAreaView>
      <Home />
    </>
  )
}