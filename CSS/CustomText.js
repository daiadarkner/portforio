import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, style }) => {
  return <Text style={[styles.defaultText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 24,
    color: 'gray',
    // 他のデフォルトスタイルプロパティを追加できます
  },
});

export default CustomText;