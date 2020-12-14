import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
        style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 20,
        width: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default SearchBar;
