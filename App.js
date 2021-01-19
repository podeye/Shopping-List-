import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () =>{

  const [items, setItems] = useState([
    {id: Math.floor((Math.random()*(1000 - 1) + 1)).toString(), text:'Milk' },
    {id:Math.floor((Math.random()*(1000 - 1) + 1)).toString(), text:'Eggs' },
    {id:Math.floor((Math.random()*(1000 - 1) + 1)).toString(), text:'Bread' },
    {id:Math.floor((Math.random()*(1000 - 1) + 1)).toString(), text:'Juice' },
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id != id);
    })
  }

  const addItem = (text) => {
      setItems(prevItems=>{
        return [{id:Math.floor((Math.random()*(1000 - 1) + 1)).toString(), text:text},...prevItems]
      });
  }

  return(
    <View style={styles.container}>
      <Header/>
      <AddItem addItem = {addItem}/>
      <FlatList 
      data={items}
      renderItem={({item})=><ListItem item={item} deleteItem={deleteItem}></ListItem>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   paddingTop:20,
 }
})

export default App;