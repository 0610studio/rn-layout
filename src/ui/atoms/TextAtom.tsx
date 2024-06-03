import React from 'react';
import { Text, TextProps } from 'react-native';

type TextAtomProps = TextProps & {
  
};

const TextAtom = ({ ...props }: TextAtomProps) => {
  return (
    <Text {...props} style={[props.style]}>{props.children}</Text>
  );
};

export default TextAtom;
