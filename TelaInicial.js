import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import icon from "./icon"


export default class TelaInicial extends Component; {


  state = {
   search: '',
 };

 updateSearch = search => {
   this.setState({ search });
 };


render(){

return(

<view Style={{backgroundColor='green',flex:1}}>

<SearchBar
        placeholder="Pesquise o Preco..."
        onChangeText={this.updateSearch}
        value={search}/>

<Icon name="icon" size={20} style={{ marginRight: 10 }} />





<ScrollView>
<View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
<text>últimas promocoes</text>
{horizontal='true'}
showsHorizontalScrollIndicator={false}
.....
</Scrowview>


<ScrollView>
<View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
<text>últimos pedidos</text>
{horizontal= 'true'}
showsHorizontalScrollIndicator={false}
...
</Scrowview>
</view>

















}















};
