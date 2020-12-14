import React, { useState } from "react";
import FeedRoute from "./FeedScreen";
import AlbumRoute from "./AlbumScreen";
import RecentRoute from "./RecentScreen";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet } from 'react-native';

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "feeds", icon: "chat", color: "white" },
    { key: "albums", icon: "contacts", color: "white" },
    { key: "recents", icon: "settings", color: "white" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedRoute,
    albums: AlbumRoute,
    recents: RecentRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bottomNavigation}
    />
  );
};

const styles = StyleSheet.create({
    bottomNavigation : {
        backgroundColor: 'white',
        height: 70,
        width: 400,
    }
  });

export default Screen;