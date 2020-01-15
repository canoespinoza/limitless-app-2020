import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

export class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.boldText}>HOME</Text>
      </View>
    );
  };
};

export class WorkoutTracker extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.boldText}>WORKOUT TRACKER</Text>
      </View>
    );
  };
};

export class Feed extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.boldText}>FEED</Text>
      </View>
    );
  };
};

export class Profile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.boldText}>PROFILE</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  boldText: {
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: '60px',
  }
});

const TabNavigator = createBottomTabNavigator ({
  Home: { 
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' size={25} />
      )
    } 
  },
  Feed: { 
    screen: Feed, 
    navigationOptions:{
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-globe' size={25} />
      )
    } 
  },
  Workout: { 
    screen: WorkoutTracker, 
    navigationOptions:{
      tabBarLabel: 'Workout',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-fitness' size={25} />
      )
    } 
  },
  Profile: { 
    screen: Profile, 
    navigationOptions:{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-body' size={25} />
      )
    } 
  }
});

export default createAppContainer(TabNavigator);
