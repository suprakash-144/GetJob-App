import {View, FlatList, Pressable} from 'react-native';
import React from 'react';
import NearbyCard from '../Components/NearbyCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStakc} from '../Router/Router';
const data: [] = [];

type SearchScreenProps = NativeStackScreenProps<AppStakc, 'Search'>;
const Search = ({navigation}: SearchScreenProps) => {
  console.log('Search');

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details');
            }}>
            <NearbyCard item={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Search;
