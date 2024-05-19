import React from 'react';
import { ViewProps } from 'react-native';
interface CardProps extends ViewProps {
    borderRadius?: number;
}
declare const Card: ({ borderRadius, ...props }: CardProps) => React.JSX.Element;
export default Card;
//# sourceMappingURL=index.d.ts.map