import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type HeaderProps = {
  onReload: () => void;
  onLogout: () => void;
  testId?: string;
};

export const Header = ({
  onReload,
  onLogout,
  testId = 'default-tabs',
}: HeaderProps) => {
  return (
    <View style={styles.container} testID={testId}>
      <Text style={styles.title}>HOME</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onReload} testID={`${testId}-reload`}>
          <Image
            source={require('@assets/reload.png')}
            style={styles.iconReload}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} testID={`${testId}-logout`}>
          <Image source={require('@assets/logout.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
