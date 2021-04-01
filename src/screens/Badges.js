import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={require("../assets/badges/goldBadge.png")}  style={{height:100, width:100}}/>
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
      </TouchableOpacity>
    </View>
  );
}

export default class Badges extends React.Component {
  state = {
    data:[
        {
            "name": "Gold Star",
            "position": "Finished level one in record time!",
            "ID": "gold",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "name": "Silver Star",
            "position": "Finished level one in decent time!",
            "ID": "silver",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
          "name": "Bronze Star",
          "position": "Finished level one!",
          "ID": "bronze",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
          "name": "Check Mark Badge",
          "position": "Found the first child safety note!",
          "ID": "mark",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
      },
      {
          "name": "Clock Badge",
          "position": "Finished in record time!",
          "ID": "clock",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
      },
      {
        "name": "Coffee Cup Badge",
        "position": "Found the coffee cup with child safety information!",
        "ID": "coffee",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
      },
      {
        "name": "Heart Badge",
        "position": "Found the dog with child safety information!",
        "ID": "heart",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
      },
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.ID}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});