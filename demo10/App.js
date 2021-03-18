import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Appbar, Button, Text, FAB } from 'react-native-paper';
import { Camera } from 'expo-camera';

export default function App() {

  const [kuvavirhe, setKuvavirhe] = useState(""); 
  const [kuvaustila, setKuvaustila] = useState(false); 
  const [kuvausinfo, setKuvausinfo] = useState("");
  const [kuva, setKuva] = useState(null); 
  const [kameraRef, setKameraRef] = useState();

  const kaynnistaKamera = async () => {

    const {status} = await Camera.requestPermissionsAsync();

    if (status === "granted") {

      setKuvaustila(true);


    } else {

      setKuvavirhe("Kameraa ei voida käyttää");

    }

  }

  const otaKuva = async () => {

    setKuvausinfo("Odota hetki...");

    if (kameraRef) {

      const apukuva = await kameraRef.takePictureAsync();

      setKuva(apukuva);
      setKuvausinfo("");
      setKuvaustila(false);

    }

    

  }


  return (
    (kuvaustila)
    ? <Camera style={styles.kameranakyma} ref={ (r) => { setKameraRef(r) } }>

        <Text style={{color : "#fff"}}>{kuvausinfo}</Text>

        <FAB 
          style={styles.suljeNappi}
          icon="close"
          label="Sulje"
          small
          onPress={ () => { setKuvaustila(false) } }
        />

        <FAB 
          style={styles.kuvausNappi}
          icon="camera"
          label="Ota kuva"
          onPress={ () => { otaKuva() } }
        />

      </Camera>
    : <>
        <Appbar.Header>
          <Appbar.Content title="Demo 10: Kamera" />
        </Appbar.Header>
        <View style={styles.container}>
          
          <Button
            icon="camera"
            mode="contained"
            onPress={kaynnistaKamera}
          >
            Ota kuva
          </Button>
        
          <Text>{kuvavirhe}</Text>

          {(kuva)
            ? <Image 
                style={styles.kuva}
                source={{ uri: kuva.uri }}
              />
            : null
          }

        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kameranakyma : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'    
  },
  suljeNappi : {
    position : 'absolute',
    margin : 20,
    bottom : 0,
    left : 0   
  },
  kuvausNappi : {
    position : 'absolute',
    margin : 20,
    bottom : 0,
    right : 0   
  },
  kuva : {
    width : 300,
    height : 400,
    resizeMode : 'stretch'
  } 
});
