import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { withPromise } from "../../model/utils";

const DEFAULT_MARGIN_X = 20;
const DEFAULT_MARGIN_TOP = 0;
const DEFAULT_MARGIN_BOTTOM = 20;
const DEFAULT_BORDER_RADIUS = 14;

interface Props {
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    // ---
    primaryOnPress: () => Promise<any>;
    primaryLabelComponent: React.ReactNode;
    primaryButtonStyle?: TouchableOpacityProps['style'];
}

const ThrottleButton = ({
    loadingComponent = <ActivityIndicator />,
    disabled = false,
    // ---
    primaryLabelComponent,
    primaryOnPress,
    primaryButtonStyle = {},
}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handlePress = withPromise(async () => {
        setIsLoading(true);
        try {
            await primaryOnPress();
        } finally {
            setIsLoading(false);
        }
    });

    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={[primaryButtonStyle, styles.touchContainer]}
                onPress={handlePress}
                disabled={disabled || isLoading}
            >
                {
                    isLoading
                        ? loadingComponent
                        : primaryLabelComponent
                }
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DEFAULT_BORDER_RADIUS,
        marginTop: DEFAULT_MARGIN_TOP,
        marginBottom: DEFAULT_MARGIN_BOTTOM,
        marginLeft: DEFAULT_MARGIN_X,
        marginRight: DEFAULT_MARGIN_X,
        overflow: 'hidden',
        flexDirection: 'row'
    },
});

export default ThrottleButton;