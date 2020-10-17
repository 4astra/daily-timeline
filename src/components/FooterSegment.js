import * as React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from "react-native";
import Colors from "../constants/Colors";

export default function FooterSegment() {
    return (
        <View style={styles.container}>
            <View style={styles.flow}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.symbolsTitle, { color: Colors.passed }]}>  ◦ </Text>
                    <Text style={styles.mainTitle}>Passed</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.symbolsTitle, { color: Colors.pending }]}> ◦ </Text>
                    <Text style={styles.mainTitle}>Pending</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.symbolsTitle, { color: Colors.approved }]}> ◦ </Text>
                    <Text style={styles.mainTitle}>Approved </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderTopColor: Colors.lineBorderColorAnpha,
        borderTopWidth: 3.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flow: { flexDirection: 'row', borderColor: '#4AC0A4', borderWidth: 1.0, borderRadius: 20.0 },
    mainTitle: { fontSize: 11, color: Colors.gray },
    symbolsTitle: { fontSize: 13, marginTop: -2, fontWeight: 'bold' },
});
