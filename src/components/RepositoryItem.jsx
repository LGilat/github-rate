import React from "react";
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from '../themes/theme'


const RepositoryItemHeader  =({ownerAvatarUrl, fullName, description, id, language}) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
            <View style={{ paddingRight: 10}} >
                <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
            </View>
            <View style={{flex: 1}}>
                <StyledText bold> {fullName} </StyledText>
                <StyledText blue> {description} </StyledText>
                <StyledText style={styles.language} > {language}  </StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = ({ props }) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader { ...props} />
            <RepositoryStats {...props} />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },

    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    },
    language: {
        padding: 1,
        color: '#fff',
        // backgroundColor: Platform.OS === 'android' ? 'red' : '#00BFFF', // Azul primavera
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: '#00BFFF'
        }),
        marginVertical: 4,
        alignSelf: 'flex-start',
        borderRadius: '4px'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: '4px'
    }
})

export default RepositoryItem;