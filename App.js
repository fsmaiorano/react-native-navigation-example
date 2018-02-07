import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>to dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />
    }
  }
})

const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  }
})

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} color="black" />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color="black" />
    }
  }
})

export default class App extends React.Component {
  render() {
    // return (
    //   <Tabs />
    // );
    return (
      <View style={{ flex: 1 }}>
        <Stack />
      </View>
    )
    // return (
    //   <View style={{ flex: 1 }}>
    //     <Drawer />
    //   </View>
    // )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
