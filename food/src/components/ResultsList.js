import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({header, results}) => {
    return <View>
        <Text style={styles.title}>{header}</Text>
        <Text>Results: {results.length}</Text>
    </View>;
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ResultsList;