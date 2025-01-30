import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfxPec5QtewCphdWkWKThsx8PMNJiOFv62w&s',
                  }}
                style={styles.cardImage}
                />
                <View style={styles.CardBody}>
                    <Text style={styles.cardTitle}>Ram Mandir</Text>
                    <Text style={styles.cardLabel}>Ayodhya</Text>
                    <Text style={styles.cardDescription}>The Ayodhya Ram Mandir is a Hindu temple in Ayodhya, Uttar Pradesh, India. It was inaugurated on January 22, 2024. The temple is dedicated to Lord Rama, a major deity in Hinduism, and is believed to be built on the site of his birthplace, Ram Janmabhoomi. </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#333333',
        paddingHorizontal: 16,
    },
    card: {
        width: 350,
        height: 385,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardImage: {
        height:220,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    CardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize:22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 2,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 4,
        marginTop:6,
    },
    cardFooter: {
        color: '#000000',
        fontSize: 10,
    }
})