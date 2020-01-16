import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import icon from 'Ionicons';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>L(IM)ITLESS</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '60px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    letterSpacing: 1,
  }
});