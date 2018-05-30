import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

class Feed extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Feed Mounted!")
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Feed</Text>

        {/* <Button onPress={() => navigate('MenuOptions')} style={{color: 'white', fontSize: 40, height: 50, width: 205, marginTop: 100}}>ENTER</Button> */}

        <Button
          onPress={() => navigate('UserDetail')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />


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


export default Feed;
