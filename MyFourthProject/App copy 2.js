import React, {Component, useState} from 'react';
import { render } from 'react-dom';
import { Text,TestInput, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function WordConvertor() {
  const[text,setText] = useState('');
  return (
    <View style={{padding:40}}>
      <TextInput
      style = {{height:40}}
      placeholders = "Input your text here!"
      onChangeText = {text => setText(text)}
      defaultValue = {text}
      />
      <Text style = {{padding:10 , fontSize:42}}>
        {text.split('').map((word) => word && '*').join('')}
      </Text>
    </View>
  );
}

