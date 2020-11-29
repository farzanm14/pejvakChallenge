import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const App = () => {
  console.disableYellowBox = true;

  return (
    <StyleProvider style={getTheme(material)}>
      <Root>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </Root>
    </StyleProvider>
  );
};

export default App;
