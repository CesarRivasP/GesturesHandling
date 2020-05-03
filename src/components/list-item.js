import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LeftItem from './left-item';
import RightItem from './right-items';


const ListItem = ({ description }) => {

  const onSwipeFromRight = () => {
    alert('from right');
  };

  const onSwipeFromLeft = () => {
    alert('from Left');
  };

  return (
    <Swipeable
      onSwipeableLeftOpen={()=>console.log('Swiped Leftt')}
      onSwipeableRightOpen={()=>console.log('Swiped right')}
      renderLeftActions={() => <LeftItem/>}
      renderRightActions={() => <RightItem  />}>
      <View style={styles.listItem}>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
    flex: 1,
    height: 60,
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#000',
  },
});

export default ListItem;
