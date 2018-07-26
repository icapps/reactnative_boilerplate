import React from 'react';
import { Text, FlatList, View } from 'react-native';

export default class FabTest extends React.Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'My Screen',
          fontSize: 14,
          color: 'red',
        },
        largeTitle: {
          visible: true,
          fontSize: 30,
          color: 'red',
          fontFamily: 'Helvetica',
        },
      },
    };
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={new Array(100).fill({ key: 'Test' })}
          renderItem={({ item, index }) => <Text style={{ padding: 10, borderColor: '#555', borderWidth: 1 }}>{`${item.key} ${index}`}</Text>}
          keyExtractor={(item, index) => `${index}`}
        />
        <View style={{
          backgroundColor: '#ff772a',
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}><Text>FAB</Text></View>
      </View>
    );
  }
}
