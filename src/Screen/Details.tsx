// import {View, Text} from 'react-native';
import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AppStakc} from '../Router/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

type DetailsScreenProps = NativeStackScreenProps<AppStakc, 'Details'>;

const Details = ({navigation}: DetailsScreenProps) => {
  const route = useRoute();
  const id = route.params?.id;
  // const [search, setSearch] = useState('react developer');
  //  const {data, refetch, loading} = useFetch("job-details", {
  //    query: id,
  //  });
  return (
    <View style={style.conatiner}>
      <Pressable
        style={style.conatiner}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>{id}</Text>
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
});

export default Details;
