import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCalendar } from "../actions/calendarAction";
import FooterSegment from "../components/FooterSegment";
import RequesterInfo from "../components/RequesterInfo";
import Colors from "../constants/Colors";


export default function CalendarScreen({ navigation, props }) {
    const dispatch = useDispatch();
    const timelines = useSelector((state) => state.calendarReducer.timelines);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Lịch khám ngày 20/10/2020',
            headerTintColor: Colors.titleMainColor,
            headerStyle: {
                backgroundColor: Colors.customHeaderBackground,
            },
        });
    }, [navigation]);

    React.useEffect(() => {
        if (!timelines) {
            dispatch(fetchCalendar)
        }
    })
    let allKeys = undefined
    let allDatas = undefined
    if (timelines) {
        allKeys = Object.keys(timelines)
        allDatas = Object.keys(timelines).map((key) => timelines[key])
    }

    return (
        <View style={styles.container}>

            <FlatList
                data={allDatas}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.calendarContent}>

                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                {/* Hourly */}
                                <Text style={styles.hourlyTitle}>{allKeys[index]}</Text>
                                {/* Top Line */}
                                <View style={styles.topLine} />
                            </View>
                            <View style={styles.requesterInfo}>
                                <View style={[styles.requesterBorder, { borderWidth: item.length > 0 ? 1.0 : 0, borderRadius: item.length > 0 ? 5.0 : 0 }]}>
                                    {
                                        item.map((elm, index) => {
                                            return (
                                                <RequesterInfo key={index + "requesterinfo"} item={item} elm={elm} index={index} />
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => item.id + index.toString()}
            />
            <FooterSegment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calendarContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    hourlyTitle: { flex: Platform.OS == 'web' ? 0.05 : 0.15, textAlign: 'right', fontWeight: 'bold' },
    topLine: {
        flex: Platform.OS == 'web' ? 0.95 : 0.85,
        borderTopColor: Colors.lineBorderColor,
        height: 1.0, backgroundColor: Colors.lineBorderColor
    },
    requesterInfo: {
        marginTop: -8, marginBottom: -8,
        top: 0, left: 0, right: 0, bottom: 0,
        marginLeft: Platform.OS == 'web' ? 90 : 70, height: 80, justifyContent: 'center',
        borderLeftColor: Colors.lineBorderColor, borderLeftWidth: 1.0,
    },
    requesterBorder: {
        borderWidth: 1.0, borderColor: Colors.lineBorderColor,
        flexDirection: 'row', height: 70,
        alignItems: 'center', marginLeft: 5, marginRight: 5,
        borderColor: Colors.lineBorderColor
    }
});
