import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type HeaderProps = {
  onReload: () => void;
  onLogout: () => void;
};

export const Header = ({onReload, onLogout}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onReload}>
          <Image
            source={require('@assets/reload.png')}
            style={styles.iconReload}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout}>
          <Image source={require('@assets/logout.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
