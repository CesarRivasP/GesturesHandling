import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const LeftItem = ({}) => (
  <View style={styles.leftItem}>
   <Text style={[styles.leftItemText]}>Open</Text>
 </View>
);

const styles = StyleSheet.create({
  leftItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:20,
    color: '#fff',
  },
  leftItem: {
    flex:1,
    backgroundColor: '#76a21e',
    justifyContent: 'center',
  },
});

export default LeftItem;
