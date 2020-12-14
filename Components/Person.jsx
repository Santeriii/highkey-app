import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Person = ({ online, name, description,  minutes, image, unread }) => (
    <View style={styles.viewElement}>
      {online && <Text style={styles.online}/>}
      <Image
          style={styles.image}
          source={{
            uri: image,
          }}
      />
        <Text style={styles.minutes}>{minutes} min</Text>
        <View style={styles.contentText}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {unread === 0 ? <Icon style={styles.unread} name='check-all'/> : <View style={styles.unreadCount}><Text style={styles.unreadNumber}>{unread}</Text></View>}
      </View>
    </View>
);

const styles = StyleSheet.create({
  heading : {
      marginTop: 50,
    left: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  sideBySide: {
    flexDirection: 'row',
  },
  writeIcon: {
    fontSize: 40,
    marginTop: 48,
    left: 200,
    color: 'lightgrey',
  },
  image: {
    left: 20,
    top: 20,
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
  viewElement: {
    marginTop: 20,
    height: 85,
    flexDirection: 'row',
  },
  name: {
    top: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    top: 30,
    maxWidth: 200,
  },
  contentText: {
    flexDirection: 'column',
  },
  minutes: {
    top: 20,
    left: 270,
    color: 'lightgrey',
  },
  unread: {
    left: 255,
    fontSize: 15,
  },
  unreadCount: {
    fontWeight: 'bold',
    fontSize: 10,
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'purple',
    left: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadNumber: {
    color: 'white',
  },
  online: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 10,
    backgroundColor: 'lightgreen',
    left: 65,
    top: 65,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
});

export default Person;
  