import React from 'react';
import { Text,Image, ScrollView} from 'react-native';

const dog = {
  uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy-dog&psig=AOvVaw2t1gX9OLI9tyDodi-ZQarF&ust=1650433749018000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjOkv22n_cCFQAAAAAdAAAAABAE',
  width: 64,
  height: 64
};

export default  MyScrollViewApp = ()  => (
  


   <ScrollView style = {{padding:40}}>
     <Text style = {{fontSize: 80}}>Try to scroll down</Text>
     <Image source = {require('./assets/download.jpg')} style ={{width:80, height: 80}} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Text style = {{fontSize: 80}}>Try to scroll down again, if you like</Text>
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Text style  = {{fontSize: 80}}>Try to scroll down again, if you like</Text>
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />
     <Image source = {dog} />

   </ScrollView>
  );


