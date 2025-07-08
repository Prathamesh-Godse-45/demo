import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import LoginScreen from './Screens/Auth/LoginScreen';
import Register from './Screens/Auth/Register';
import Dashboard from './Screens/Home/Dashboard';
import Summary from './Screens/Home/Summary';
import Payment from './Screens/Home/Payment';
// import RegisterationScreen from './Screens/Auth/RegisterationScreen';

export default function App() {
  const StackNavigator = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="register" component={Register} options={{ headerShown: false }} />
        <StackNavigator.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
        <StackNavigator.Screen name="summary" component={Summary} />
        <StackNavigator.Screen name="payment" component={Payment} />

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
