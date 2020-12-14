import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Person from './Person';

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    minutes: 10,
    online: true,
    unreadCount: 2,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    minutes: 5,
    online: false,
    description: 'Ruby on Rails',
    unreadCount: 0,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    minutes: 15,
    online: true,
    unreadCount: 1,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    minutes: 20,
    online: false,
    unreadCount: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const PersonList = () => {

  const renderItem = ({ item }) => (
    <Person online={item.online} name={item.fullName} unread={item.unreadCount} description={item.description} minutes={item.minutes} image={item.ownerAvatarUrl} />
  );

  return (
      <FlatList
        data={repositories}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
      />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default PersonList;