import React from 'react';
import { View, ViewProps } from 'react-native';

type ViewAtomProps = ViewProps & {
  
};

const ViewAtom = ({ ...props }: ViewAtomProps) => {
  return (
    <View {...props} style={[props.style, {}]}>{props.children}</View>
  );
};

export default ViewAtom;
