import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Button title="Default (white)" onPress={() => setBackgroundColor('white')} />
            
            <Button title="Light Pink" onPress={() => setBackgroundColor('lightpink')} />
            
            <Button title="Red" onPress={() => setBackgroundColor('red')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ColorChangerApp;