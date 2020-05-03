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
  Animated,
  FlatList
} from 'react-native';
import  {
  PanGestureHandler,
  PinchGestureHandler
} from 'react-native-gesture-handler';
import ListItem from './src/components/list-item'


class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'item1',
        description: ' +1 213 323 2343 ',
      },
      {
        id: 2,
        name: 'hayani',
        description: ' +1 513 323 2646',
      },
      {
        id: 3,
        name: 'Oho',
        description: ' +1 613 673 2646 ',
      },
      {
        id: 4,
        name: 'Name',
        description: ' +1 913 323 8846 ',
      },
      {
        id: 5,
        name: 'item6',
        description: ' +1 343 683 2646',
      },
      {
        id: 1,
        name: 'item1',
        description: '+1 613 323 5656',
      },
      {
        id: 2,
        name: 'hayani',
        description: '+1 883 000 2646 ',
      },
    ]
  }

  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.listItemWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>
              Settings
            </Text>
          </View>

          <FlatList
            data={this.state.items}
            renderItem={({item}) => <ListItem {...item} />}
          />
        </View>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#eee',
  },
  titleWrapper: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
    marginVertical: 20,
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
