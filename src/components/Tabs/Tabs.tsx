import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';

type TabsProps = {
  tabs: {value: number; label: string}[];
  onChange: (value: number) => void;
  selected: number;
};

export const Tabs = ({tabs, onChange, selected}: TabsProps) => {
  return (
    <View style={styles.container}>
      {tabs.map(({value, label}) => (
        <TouchableOpacity
          key={value}
          style={selected === value ? styles.selectedTab : styles.tab}
          onPress={() => onChange(value)}>
          <Text
            style={selected === value ? styles.selectedLabel : styles.label}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
