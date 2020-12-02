import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import CustomList from './CustomList'
import firestore from '@react-native-firebase/firestore'

function Home({ navigation }) {

  const [list, setList] = React.useState([])

  React.useEffect(() => {
    getOptionsList()
    getMarker() 
    getMarkers()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader props={{ title: 'Home Stack', isHome: true, navigation: navigation }} />
      {/* <CustomList list={list} /> */}
      <CustomList list={tempList} />
    </SafeAreaView>
  );

  async function getMarkers() {
    const events = await firebase.firestore().collection('events')
    events.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
        })
        console.log(tempDoc)
     })
   }
  async function getMarker() {
    const snapshot = await firestore().collection('options').get()
    console.log(snapshot.docs.map(doc => doc.data()))
    return snapshot.docs.map(doc => doc.data());
  }
  function getOptionsList() {

    const subscriber = firestore()
      .collection('options')
      .doc('14')
      .onSnapshot(documentSnapshot => {
        console.log('option data: ', documentSnapshot.data());
      });

    // const optionsCollection = 
    firestore().collection('options').onSnapshot(
      docs => {
        let options = []
        docs.forEach(doc => {
          options.push(doc.data())
        })
        setList(options)
        console.log("options", options)
      }
    )
  }
}

export default Home;


const tempList = [
  {
    _id: "5fc4eca3b31a2d2dedf34dc9",
    picture: "http://placehold.it/32x32",
    size: 1,
    color: "green",
    name: "MEDESIGN"
  }, {
    _id: "5fc4eca3b31a2d2dedf34dc9",
    picture: "http://placehold.it/32x32",
    size: 1,
    color: "orange",
    name: "MEDESIGN"
  },
  {
    _id: "5fc4eca3a0f784d04071b8e4",
    picture: "http://placehold.it/32x32",
    size: 2,
    color: "blue",
    name: "ORBIFLEX"
  },
  {
    _id: "5fc4eca3fe0cf09ab9d4020a",
    picture: "http://placehold.it/32x32",
    size: 3,
    color: "gray",
    name: "ZENSUS"
  },
  {
    _id: "5fc4eca32d7a7d53b722f6b7",
    picture: "http://placehold.it/32x32",
    size: 3,
    color: "brown",
    name: "MINGA"
  },
  {
    _id: "5fc4eca35cc8d2569e99175b",
    picture: "http://placehold.it/32x32",
    size: 2,
    color: "pink",
    name: "FUELWORKS"
  },
  {
    _id: "5fc4eca30759b12d30dbb790",
    picture: "http://placehold.it/32x32",
    size: 2,
    color: "black",
    name: "ZENSOR"
  }, {
    _id: "5fc4eca30759b12d30dbb790",
    picture: "http://placehold.it/32x32",
    size: 3,
    color: "red",
    name: "ZENSOR"
  },
  {
    _id: "5fc4eca30759b12d30dbb790",
    picture: "http://placehold.it/32x32",
    size: 3,
    color: "orange",
    name: "ZENSOR"
  }, {
    _id: "5fc4eca30759b12d30dbb790",
    picture: "http://placehold.it/32x32",
    size: 2,
    color: "yellow",
    name: "ZENSOR"
  },
]