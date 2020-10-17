import * as React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from "react-native";
import Colors from "../constants/Colors";

export default function RequesterInfo({ item, elm, index }) {
    return (
        <TouchableOpacity key={index} style={{ flex: 1.0 / item.length, flexDirection: 'row' }}>
            <View style={[styles.line, { borderColor: elm['color_code'], backgroundColor: elm['color_code'] }]}></View>
            <View style={{ flexDirection: 'column', paddingLeft: 5, justifyContent: 'center' }}>
                {!elm['avatar'] ?
                    <ImageBackground style={styles.avatar} source={require("../../assets/avatarAnynomousMale.png")} />
                    : <ImageBackground style={styles.avatar} source={{ uri: elm['avatar'] }} />
                }
                <Text numberOfLines={1} style={styles.fullName} key={index}>{elm['requester']}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[styles.status, { color: Colors[elm['status']] }]}>◦</Text>
                    <Text numberOfLines={1} style={styles.symptom}>{truncateText(1.0 / item.length, elm['symptom'])}</Text>
                </View>
            </View>
        </TouchableOpacity>)
}

const truncateText = (flexNumber, text) => {

    if (flexNumber == 1.0) {
        return text.substr(0, 130)
    }
    else if (flexNumber == 0.5) {
        return text.substr(0, 100) + "..."
    }
    else if (flexNumber >= 0.3) {
        return text.substr(0, 50) + "..."
    } else {
        return text.substr(0, 15) + "..."
    }
}


const styles = StyleSheet.create({
    line: {
        width: 8, height: 70,
        borderLeftWidth: 1.0, borderTopLeftRadius: 5,
        borderBottomWidth: 1.0, borderBottomLeftRadius: 5
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1.0,
        borderColor: "#E5E5E5",
        overflow: "hidden",
    },
    fullName: { fontSize: 13, height: 15, fontWeight: 'bold', color: Colors.mainTextColor },
    status: { fontSize: 15, fontWeight: 'bold', marginTop: -3 },
    symptom: { fontSize: 12, color: Colors.mainSubTextColor, height: 15 }
});
