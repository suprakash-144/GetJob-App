import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {AppStakc} from '../Router/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Popularjobs from '../Components/Popularjobs';
import Nearbyjobs from '../Components/Nearbyjobs';
import Welcome from '../Components/Welcome';
// const value: string[] = ['asd', 'asd', 'asd', 'asd', 'asd', 'asd'];
const obj: {}[] = [
  {title: 'asd'},
  {title: 'asd'},
  {title: 'asd'},
  {title: 'asd'},
  {title: 'asd'},
  {title: 'asd'},
];
type HomeScreenProps = NativeStackScreenProps<AppStakc, 'Home'>;
const Home = ({navigation}: HomeScreenProps) => {
  // console.log('home');
  //  const [search, setSearch] = useState('react developer');
  //  const {data, refetch, loading} = useFetch('search', {
  //    query: search,
  //    num_pages: 1,
  //  });
  // const [selected, setselected] = useState(0);

  return (
    <View style={style.conatiner}>
      <Pressable
        onPress={() => {
          navigation.navigate('Details', {id: 1});
        }}>
        <Text>Details</Text>
      </Pressable>
      <Welcome />
      <Popularjobs data={obj} />
      <Nearbyjobs data={obj} />
    </View>
  );
};
const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#000E32',
  },
});
export default Home;
