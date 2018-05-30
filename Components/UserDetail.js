import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class UserDetail extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("UserDetail Mounted!")
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>This is the UserDetail</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default UserDetail;
