import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NearbyCard = ({item}: any) => {
  return (
    <View>
      <Text>{item.title}NearbyCard</Text>
    </View>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({});
