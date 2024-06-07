import React from "react";
import { StyleSheet, View , Text} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes, Link } from "react-router-native";
import LogInPage from "../pages/Login";


const About = () => (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>
      <Link to="/" style={styles.link}>
        <Text style={styles.linkText}>Go to Home</Text>
      </Link>
    </View>
);

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path='/about' element={<About />} />
                <Route path='/signin' element={<LogInPage />} />
            </Routes>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})