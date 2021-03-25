import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Appbar, Button, Dialog, List, Portal, Provider as PaperProvider, Text, Title } from 'react-native-paper';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("ostoslista.db");

db.transaction(
  (tx) => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS ostokset (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    teksti TEXT
                  )`);
  }, 
  (err) => {
    console.log(err);    
  }
);


export default function App() {

  const [ostokset, setOstokset] = useState([]);
  const [uusiOstosDialogi, setUusiOstosDialogi] = useState({
                                                              nayta : false,
                                                              uusiOstos : ""
                                                           });

  const tyhjennaLista = () => {

    db.transaction(
      (tx) => {
        tx.executeSql(`DELETE FROM ostokset`, [], 
          (_tx, rs) => {
            haeOstokset();
          }
        );
      }, 
      (err) => {
        console.log(err);
      }
    );    

  }

  const lisaaOstos = () => {

    db.transaction(
      (tx) => {
        tx.executeSql(`INSERT INTO ostokset (teksti) VALUES (?) `, [uusiOstosDialogi.uusiOstos], 
          (_tx, rs) => {
            haeOstokset();
          }
        );
      }, 
      (err) => {
        console.log(err);
      }
    );    

    setUusiOstosDialogi({nayta : false, uusiOstos : ""});

  }

  const haeOstokset = () => {

    db.transaction(
      (tx) => {
        tx.executeSql(`SELECT * FROM ostokset`, [], 
          (_tx, rs) => {
            setOstokset(rs.rows._array);
          }
        );
      }, 
      (err) => {
        console.log(err);
      }
    );

  }

  useEffect(() => {
    haeOstokset();
  }, [])

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Demo 11: SQLite-tietokannat"/>
      </Appbar.Header>
      <ScrollView style={{padding : 20}}>

        <Title>Ostoslista</Title>

        {(ostokset.length > 0)
        ? ostokset.map((ostos) => {
          return <List.Item
                    key={ostos.id}
                    title={ostos.teksti}
                 />
        })
        : <Text>Ei ostoksia</Text>
        }

        <Button
          icon="plus"
          mode="contained"
          style={{ marginTop : 10 }}
          onPress={() => { setUusiOstosDialogi({nayta : true, uusiOstos : ""}) }}
        >
          Lisää ostos
        </Button>

        <Button
          icon="delete"
          color="red"
          mode="contained"
          style={{ marginTop : 10 }}
          onPress={tyhjennaLista}
        >
          Tyhjennä lista
        </Button>

        <Portal>
          <Dialog visible={uusiOstosDialogi.nayta} onDismiss={ () => { setUusiOstosDialogi({ nayta : false,  uusiOstos : ""}) } }>
            <Dialog.Title>Uusi ostos</Dialog.Title>
            <Dialog.Content>
              <TextInput 
                label="Ostos"
                mode="outlined"
                placeholder="Kirjoita ostos..."
                onChangeText={ (teksti) => { setUusiOstosDialogi({...uusiOstosDialogi, uusiOstos : teksti}) } }
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button 
                onPress={lisaaOstos}
              >Lisää listaan</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>
    </PaperProvider>
  );
}

