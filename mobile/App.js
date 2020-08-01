import React from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/components/Login';
import Main from  './src/components/Main';
import {IsLogged} from './src/services/Authentication';

const Stack = createStackNavigator();
const DrawerTab = createDrawerNavigator();

export default function App({navigation}){
  function DrawerContent() {
    return (
      <>
      <DrawerContentScrollView>
      <View style={styles.userInfoSection}>
        <Avatar.Icon size={90} style={styles.avatar}
        icon={({ color, size }) => (
          <Icon name="account-circle" color={color} size={90} />
        )}/>
        <Title style={styles.title}>Leonardo Gerheim</Title>
        <Caption style={styles.caption}>@trensik</Caption>
      </View>
      <Drawer.Section>
        <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() =>  alert('ola')}
        />
        <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cog" color={color} size={size} />
              )}
              label="Configurações"
              onPress={() =>  alert('ola')}
        />
      </Drawer.Section>
      <Drawer.Section style={styles.drawerSection}>
      
        <DrawerItem
              icon={({ color, size }) => (
                <Icon name="logout" color={color} size={size} />
              )}
              label="Sair"
              onPress={() =>  alert('ola')}
        />
      </Drawer.Section>
      </DrawerContentScrollView>
      </>
    );
  }

  function Dashboard(){
    return(
      <DrawerTab.Navigator drawerContent={()=><DrawerContent/>}>
        <DrawerTab.Screen name='Dashoard' component={Main}/>
      </DrawerTab.Navigator>
    )
  }

  return(
  <NavigationContainer>
    <Stack.Navigator>
      {IsLogged ? (
        <Stack.Screen options={{headerShown : false}} name='Dashboard' component={Dashboard}/>
      ) : (<Stack.Screen options={{headerShown : false}} name='Login' component={Login}/>)}
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  avatar : {
    backgroundColor : '#ffffff',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop : 10,
    paddingBottom : 30,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});