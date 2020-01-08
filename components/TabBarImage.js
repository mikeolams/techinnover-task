import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarImage(props) {
    return (
        <View
            style={styles.menuIcon}
            color={props.focused}
        >
            <Image source={props.icon} style={styles.menuIcon} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});
