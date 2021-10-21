// Home.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const dummyArray = [
  {
    pickupTime: '2021-08-16 10:15 AM',
    orderType: 'PICKUP',
    customerName: 'Ed Baldwin',
    customerPhone: '444-555-6677',
    orderNumber: '389715',
    details: [
      {
        orderNumber: 'test',
        name: 'test description',
        isThunder: false,
      },
      {
        orderNumber: 'test',
        name: 'test description',
        isThunder: false,
      },
    ],
  },
  {
    pickupTime: '2021-08-16 10:15 AM',
    orderType: 'PICKUP',
    customerName: 'Ed Baldwin',
    customerPhone: '444-555-6677',
    orderNumber: '389715',
  },
];
const timeSlotsArray = [
  {
    duration: '7 AM  - 8 AM',
    deliveryCount: 0,
    pickupCount: 0,
    isOpened: false,
    existingArray: [],
  },
  {
    duration: '8 AM  - 9 AM',
  },
  {
    duration: '9 AM  - 10 AM',
  },
  {
    duration: '10 AM  - 11 AM',
  },
];
const Item = (item, index) => {
  const {duration, deliveryCount, pickupCount, isOpened} = item;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          item.isOpened = !item.isOpened;
        }}>
        <Text>{duration}</Text>
        <Text>{deliveryCount}</Text>
        <Text>{pickupCount}</Text>
        <Image />
      </TouchableOpacity>
      {isOpened && (
        <View>
          {item &&
            item.existingArray &&
            item.existingArray.map((subItem, subIndex) => {
              <SubItemCardView subItem={subItem} subIndex={subIndex} />;
            })}
        </View>
      )}
    </View>
  );
};
const SubItemCardView = (item, index) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
const HeaderView = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>Time Slot</Text>
      <Text>Pickup</Text>
      <Text>Delivery</Text>
    </View>
  );
};
export default class ListTemporary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAdminUser: false};
  }

  componentDidMount() {
    // after making an API call, we will be having response like dummyArray
    timeSlotsArray.map((item, index) => {
      //todo, we will checking from dummyArray, if any of the pickUpTime lies between item.duration
      // we expect an array of match results between item.duration
    });
  }
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Remaining Orders',
        },
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderView />
        <FlatList
          data={timeSlotsArray}
          renderItem={(item, index) => {
            <Item item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
