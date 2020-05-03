import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


const RightItem = () => {
  return (
    <View style={styles.rightItem}>
      <TouchableOpacity style={styles.deleteButtonStyle}>
        <Text style={styles.textButtonStyle}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.archiveButtonStyle}>
        <Text style={styles.archiveTextButtonStyle}>
          Archive
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textButtonStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c00000',
  },
  rightItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  archiveButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#3e64ff',
  },
  archiveTextButtonStyle:{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RightItem;
