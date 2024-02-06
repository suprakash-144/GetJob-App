import {FlatList, Pressable, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import NearbyCard from './NearbyCard';
import {useNavigation} from '@react-navigation/native';
type NearbysectionProps = PropsWithChildren<{
  data: {}[] | undefined | null;
  // data: any;
}>;
const Nearbyjobs = ({data}: NearbysectionProps) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 3}}>
      <Text>Nearbyjobs</Text>
      <FlatList
        data={data}
        horizontal={false}
        ListHeaderComponent={
          <View>
            <Text>Near By Jobs</Text>
          </View>
        }
        ListHeaderComponentStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {id: 1});
            }}>
            <NearbyCard item={item} />
          </Pressable>
        )}
        // keyExtractor={item => item?.id}
      />
    </View>
  );
};

export default Nearbyjobs;
