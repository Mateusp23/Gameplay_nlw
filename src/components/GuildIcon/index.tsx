import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function  GuildIcon (){
    const uri = 'https://www.pngfind.com/pngs/m/28-283040_flat-discord-material-like-icon-discord-icon-png.png';
    return (
        <Image 
            source= {{uri}}
            style={styles.image}
            resizeMode="cover"
        />
                   
    )
}