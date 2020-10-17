
let raw_data = require('../../assets/data.json')

export const DATA_PROCESSING = 'DATA_PROCESSING'
export const DATA_PROCESSING_COMPLETED = 'DATA_PROCESSING_COMPLETED'

export const fetchCalendar = async (dispatch) => {
    
    dispatch({ type: DATA_PROCESSING })

    const groups = {}

    for (var i = 6; i <= 20; i++) {
        groups[(i < 10 ? "0" + i : i) + ":00"] = []
    }

    const datas = raw_data["data"]

    // process data for earch timeline
    for (var j = 0; j < datas.length; j++) {

        const appoitment_calendar = datas[j]["appoitment_calendar"]

        for (var k = 0; k < appoitment_calendar.length; k++) {

            const start_time = appoitment_calendar[k]["start_time"].split(" ")[1].substr(0, 5)

            if (groups[start_time]) {
                groups[start_time].push(appoitment_calendar[k])
            }

        }
    }

    // console.log("New groups:", groups)
    dispatch({ type: DATA_PROCESSING_COMPLETED, payload: groups})

}