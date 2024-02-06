import {FlatList, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Popularcard from './Popularcard';
type PopularsectionProps = PropsWithChildren<{
  data: {}[] | undefined | null;
  // data: any;
}>;
const Popularjobs = ({data}: PopularsectionProps) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Text>Popular Jobs</Text>
          </View>
        }
        ListHeaderComponentStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={data}
        horizontal={true}
        renderItem={({item}) => <Popularcard item={item} />}
        // keyExtractor={item => item?.id}
      />
    </View>
  );
};

export default Popularjobs;
