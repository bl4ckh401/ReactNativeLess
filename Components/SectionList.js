import { View, Text, SectionList, RefreshControl } from 'react-native'
import React, { useState } from 'react'

export default function SectionListed() {

    const [section, setSection] = useState([{
            title:"Title 1",
            data : [
                "item 1-1" ,"item 1-2","item 1-3"
            ]
        }])
    const [loading, setLoading] = useState(false)



    const onRefresh = () => {
        const newsection = section.length + 1
        setLoading(true)
        setSection([...section, {title:"Title" + newsection, data:["item"+ newsection + "-1","item"+ newsection + "-2","item"+ newsection + "-3"]}])
        setLoading(false)

    }

  return (
    <SectionList
        keyExtractor = {(index) => {index.toString()}}
        sections={section}
        renderItem = {({item}) => {
            return(
            <View style={{ backgroundColor : "gold" }}>
                <Text>{item}</Text>
            </View>    
            )
            
        }}
        renderSectionHeader = {({section}) => {
            return(
            <View style={{ backgroundColor : "gold" }}>
                <Text>{section.title}</Text>
            </View>
            )
        }}
        refreshControl = {
            <RefreshControl 
                refreshing = {loading}
                onRefresh = {onRefresh}
            />
        }
    />
  )
}