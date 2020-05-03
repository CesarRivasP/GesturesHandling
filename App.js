/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';
import  {
  PanGestureHandler,
  PinchGestureHandler
} from 'react-native-gesture-handler';
const tag ='[GESTURE]'


class App extends Component {
  state = {
    translateX: new Animated.Value(0),
    translateY: new Animated.Value(0),
    scale: new Animated.Value(1)
  }

  // First exercise with PanGestureHandler
  // For handling circle location with gestures
  // handleGesture = Animated.event([{
  //   nativeEvent: {
  //     translationX: this.state.translateX,
  //     translationY:this.state.translateY
  //   }}],
  //   {
  //     useNativeDriver: true
  //   }
  // );

  // Second exercise with PinchGestureHandler
  handleGesture = Animated.event([{ nativeEvent: { scale:this.state.scale }}], { useNativeDriver: true });

  handleGestureStateChange = (event) => {
   console.log(tag, event.nativeEvent.scale);

   this.setState({
     scale: event.nativeEvent.scale
   });
  }

  render(){
    const circleTransformStyle = {
      transform: [
        {
          translateY: this.state.translateY
        },
        {
          translateX: this.state.translateX
        }
      ]
    };

    let scaleStyle = {
      transform: [
        {
          perspective: 200
        },
        {
          scale: this.state.scale
        }
      ]
    };

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
          <View style={styles.container}>
            <PinchGestureHandler onGestureEvent={this.handleGesture} onHandlerStateChange={this.handleGestureStateChange}>
              <Animated.View style={[styles.circle, scaleStyle]} />
            </PinchGestureHandler>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  circle: {
    width: 150,
    height: 150,
    alignSelf:'center',
    backgroundColor: "#c00000",
    borderRadius: 100
  },
});

export default App;
