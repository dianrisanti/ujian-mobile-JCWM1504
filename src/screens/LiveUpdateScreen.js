import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'

import {useSelector} from 'react-redux'

import DB from '../database/db.json'

const LiveUpdate = () => {
    const { data } = useSelector((state) => {
        return {
            data: state.dataReducer.data
        }
    })

    const country = data.Countries
    
    return(
        <ScrollView>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Live Update</Text>
                <View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                        <Text>Region</Text>
                        <Text>New Cases</Text>
                        <Text>Total Cases</Text>
                        <Text>Recovered</Text>
                        <Text>Deaths</Text>
                    </View>
                    <View>
                        {
                            country.map((item, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <ListItem.Title>{item.Country}</ListItem.Title>
                                        <ListItem.Subtitle>{item.TotalConfirmed}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{item.TotalConfirmed}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{item.TotalRecovered}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{item.TotalDeaths}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }
                    </View>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
})

export default LiveUpdate