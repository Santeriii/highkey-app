import * as React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBar from '../Components/SearchBar'
import PersonList from '../Components/PersonList'

const FeedScreen = () => (
  <Card style={styles.card}>
    <View style={styles.sideBySide}><Text style={styles.heading}>Messages</Text><Icon style={styles.writeIcon} name='pencil-box-outline'/></View>
    <SearchBar style={styles.SearchBar}/>
    <Card.Content>
      <PersonList />
    </Card.Content>
  </Card>
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
    card: {
      height: 1000,
    },
});

export default FeedScreen;