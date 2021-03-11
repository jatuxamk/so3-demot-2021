import React, { useState } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import * as Device from 'expo-device';

export default function App() {

  const [naytaTiedot, setNaytaTiedot] = useState(true)

  return (
    <>
    <Appbar.Header>
      <Appbar.Content title="Demo 9: Laiteominaisuuksia" />
    </Appbar.Header>
    <View style={styles.container}>
      
      <List.Accordion
        title="Perustietoja laitteesta"
        expanded={naytaTiedot}
        onPress={ () => { setNaytaTiedot(!naytaTiedot) } }
      >
        <List.Item title="Merkki" description={Device.brand}/>
        <List.Item title="Malli" description={Device.modelName}/>
        <List.Item title="Käyttöjärjestelmä" description={Device.osName}/>
        <List.Item title="Versio" description={Device.osVersion}/>

      </List.Accordion>

      <List.Item 
        title="Värinähälytys (Paina)"
        onPress={() => {
          Vibration.vibrate();
        }}
      />

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
