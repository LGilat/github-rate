import React from "react";
import { Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    subheading: {
        fontSize: 12
    }

})

export default function StyleText({align, style, blue, bold, children, big, small ,fontSize, fontWeight}){
   const textStyles=[
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big &&  styles.big,
    small && styles.small,
    align === 'center' && styles.textAlignCenter,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style
   ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}