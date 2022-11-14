import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import tw from 'twrnc';


const HomeScreen=()=>{
    return(
        <SafeAreaView>
            <Text style={tw`text-red-500 p-10`}>HomeScreen</Text>
        </SafeAreaView>
    );

};

export default HomeScreen;
const styles =StyleSheet.create({});