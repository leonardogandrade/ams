import React,{useState,useEffect} from 'react';
import {View,StyleSheet,SafeAreaView,ScrollView,Text,Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItem,DrawerItemList,DrawerContentScrollView} from '@react-navigation/drawer';

import Main from './src/components/Main';
import Login from './src/components/Login';
import {Logout,IsLogged} from './src/services/Authentication';

const Stack = createStackNavigator();
const DrawerTab = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <>
    <DrawerContentScrollView>
        <View style={styles.userInfoSection}>
          <Avatar.Icon size={90} style={styles.avatar}
          icon={({ color, size }) => (
            <Icon name="account-circle" color={color} size={90} />
          )}/>
          <Title style={styles.title}>Leonardo Gerheim</Title>
          <Caption style={styles.caption}>@leonardogandrade</Caption>
        </View>

        <Drawer.Section>
          <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                )}
                label="Home"
                onPress={() =>  {alert('Home')}}
          />
          <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="cog" color={color} size={size} />
                )}
                label="Configurações"
                onPress={() =>  alert('Configurações')}
          />
        </Drawer.Section>
        
        <Drawer.Section>
          <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="logout" color={color} size={size} />
                )}
                label="Sair"
                onPress={() =>  {
                  Logout();
                  navigation.push('Login');
                }}
          />
        </Drawer.Section>

    </DrawerContentScrollView>
    </>
  );
}

function Root(){
  return(
  <DrawerTab.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <DrawerTab.Screen name='Main' component={Main} />      
  </DrawerTab.Navigator>
  )
}

export default function App() {
  const [token,setToken] = useState();
  useEffect(()=>{
    IsLogged().then(res =>{
      setToken(res);
    })
  })
  return (
  <>
  <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen options={{headerShown : false}} name='Login' component={Login}/>
      <Stack.Screen options={{headerShown : false}} name='Dashboard' component={Root}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>
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

{/* <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Login');
      }}
    /> */}