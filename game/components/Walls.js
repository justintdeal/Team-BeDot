import React from 'react'
import { View } from 'react-native'

const Walls = ({color, wallsLeft, wallWidth, wallHeight, gap, randomBottom}) => {

    return (
        <>
            <View style = {{
                position: 'absolute',
                backgroundColor: color,
                width: wallWidth,
                height: wallHeight,
                left: wallsLeft,
                bottom: randomBottom + wallHeight + gap,
            }} />
            <View style = {{
                position: 'absolute',
                backgroundColor: color,
                width: wallWidth,
                height: wallHeight,
                left: wallsLeft,
                bottom: randomBottom,
            }}
            />
        </>
    )
}

export default Walls