import React from "react";
import { View } from 'react-native'
import StyledText from "./StyledText";


const parseThousands = value => {
    return value >= 1000 
    ? `${Math.round(value/100) /10}k`
    : String(value)
}

const RepositoryStats = props =>{
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText align='center' bold>Stars  </StyledText>
                <StyledText align='center' small>{parseThousands(props.stargazersCount)} </StyledText>
            </View>
            <View>
                <StyledText align='center' bold>forks </StyledText>
                <StyledText align='center' small> {parseThousands(props.forksCount)} </StyledText>
            </View>
            <View>
                <StyledText align='center' bold>Review </StyledText>
                <StyledText align='center' small>  {props.reviewCount} </StyledText>
            </View>
            <View>
                <StyledText align='center' bold>Rating   </StyledText>
                <StyledText align='center' small bold>{props.ratingAverage} </StyledText>

            </View>
        </View>
    )
}

export default RepositoryStats