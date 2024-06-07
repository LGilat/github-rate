import React from "react";
import { View, StyleSheet} from 'react-native'
import StyleText from "./StyledText";
import Constants from 'expo-constants'
import theme from "../themes/theme";
import { Link, useLocation } from "react-router-native";
import { ScrollView } from "react-native-web";


const styles= StyleSheet.create ({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.secondary,
        paddingHorizontal: 10,
        fontWeight: theme.fontWeights.normal
    },
    scroll:{
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary,
        fontWeight: theme.fontWeights.bold,
    }

})


const AppBarTab = ({  children, to}) =>{
    const { pathname } = useLocation();

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active,
    ]
    return (
        <Link to={to} >
             <StyleText fontWeight={'bold'} style={textStyles}>
                {children}
            </StyleText>

        </Link>
    )
}




const AppBar = () => {
    
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab  to='/about'>About</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar