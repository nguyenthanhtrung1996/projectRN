import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ValueProvider from './contexts/ValueProvider'
import ValueContext from './contexts/ValueContext'

import CategoriesStackScreen from './routes/CategoriesStackScreen'
import CartStackScreen from './routes/CartStack'
import SettingsStackScreen from './routes/SettingsStackScreen'

const Tab = createBottomTabNavigator();



function App() {
  const context = useContext(ValueContext);
  
  return (
    <ValueProvider>
      <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                      return (
                        <Ionicons
                          name={
                            focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline'
                          }
                          size={size}
                          color={color}
                        />
                      );
                    } else if (route.name === 'Settings') {
                      return (
                        <Ionicons
                          name={focused ? 'ios-list-box' : 'ios-list'}
                          size={size}
                          color={color}
                        />
                      );
                    } else if ( route.name ==="Cart") {
                      return (
                        <Ionicons 
                          name={focused ? 'cart' : 'cart-outline'}
                          size={size}
                          color={color}
                        />
                      )
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: '#2f95dc',
                  inactiveTintColor: 'gray',
                }}
              >
                
                    <Tab.Screen name="Home" component={CategoriesStackScreen}  />
                    <Tab.Screen name="Cart" component={CartStackScreen}/>
                    <Tab.Screen name="Settings" component={SettingsStackScreen} />
              </Tab.Navigator>
          
      </NavigationContainer>
    </ValueProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});


export default App;