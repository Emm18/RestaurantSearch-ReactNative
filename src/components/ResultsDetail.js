import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: props.result.image_url }}
            />
            <Text
                style={styles.nameStyle}
            >
                {props.result.name}
            </Text>
            <Text>
                {props.result.rating} Stars - {props.result.review_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 15,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 15
    }
})

export default ResultsDetail;