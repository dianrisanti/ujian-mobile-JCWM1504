import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Card } from 'react-native-elements'

import {useSelector} from 'react-redux'

import DB from '../database/db.json'

const Home = () => {
    const { data } = useSelector((state) => {
        return {
            data: state.dataReducer.data
        }
    })

    const global = data.Global
    
    console.log('global', global)

    return(
        <View>
                <View style={styles.container}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Coronavirus Live Update</Text>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Card containerStyle={styles.containerCard}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.productName}>
                                    Total
                                </Text>
                                <Text style={{fontSize: 12, marginBottom: 7}}>
                                    {global.TotalConfirmed ? global.TotalConfirmed : "" }
                                </Text>
                                <Text style={{fontSize: 10}}>
                                    +{global.NewConfirmed ? global.NewConfirmed : "" }
                                </Text>
                            </View>
                        </Card>

                        <Card containerStyle={styles.containerCard}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.productName}>
                                    Recovered
                                </Text>
                                <Text style={{fontSize: 12, marginBottom: 7}}>
                                    {global.TotalRecovered ? global.TotalRecovered : ""}
                                </Text>
                                <Text style={{fontSize: 10}}>
                                    +{global.NewRecovered ? global.NewRecovered : ""}
                                </Text>
                            </View>
                        </Card>

                        <Card containerStyle={styles.containerCard}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.productName}>
                                    Deaths
                                </Text>
                                <Text style={{fontSize: 12, marginBottom: 7}}>
                                    {global.TotalDeaths ? global.TotalDeaths : ""}
                                </Text>
                                <Text style={{fontSize: 10}}>
                                    +{global.NewDeaths ? global.NewDeaths : ""}
                                </Text>
                            </View>
                        </Card>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 10
    },
    containerCard: { 
        flex: 1, 
        padding: 10, 
        borderRadius: 10,
        width: 120,
        marginLeft: 10
    },

    productName: { 
        marginBottom: 5, 
        fontSize: 16,
        fontWeight: 'bold' 
    }
})

export default Home