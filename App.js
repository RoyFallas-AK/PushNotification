import React, {useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Foreground, GetFCMToken, requestUserPermission, NotificationListener } from './src/utils/pushnotification_helper';



const App = () => {

  
  useEffect(() =>{

    requestUserPermission();
    Foreground();
    GetFCMToken();
    NotificationListener();


    }, []);

  return (
        <View>
          <Text>Android push test</Text>
        </View>
  );
};



export default App;
