import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function actioncard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headertext}>
                        what's new in Javascript - ES 2
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'data:image/png;base64,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',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyConatiner}>
                    <Text numberOfLines={3}>
                        JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes
                    </Text>
                </View>
                <View style={styles.footerConatiner}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript')}
                    >   
                        <Text>Read More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerConatiner}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.instagram.com/_.manas.raj._/')}
                    >   
                        <Text>follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        paddingHorizontal: 8
    },
    card: {},
    elevatedCard: {},
    headingcontainer: {},
    headertext: {},
    cardImage: {
        height: 180
    },
    bodyConatiner: {},
    footerConatiner: {},
})