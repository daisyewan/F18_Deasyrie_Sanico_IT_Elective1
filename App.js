import React from 'react';
import { SafeAreaView } from 'react-native';
import ChatScreen from './ChatScreen'; 
import CommentSection from './CommentSection'

// Assuming ChatScreen.js is in the same directory

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
   <CommentSection/>
    <ChatScreen />
     </SafeAreaView>
  );
};

export default App;