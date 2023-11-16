export function convertDateToString(value: Date,
                                    format: "datetime" | "monthyear" | "yyyy-mm-dd" = "datetime") {

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ]

    if (format === 'datetime') {
        const year = value.getFullYear()
        const month = monthNames[value.getMonth()]
        const day = value.getDate().toString()
        const hour = value.getHours().toString()
        let minute = value.getMinutes().toString()
        if (minute.length === 1) {
            minute = `0${minute}`
        }
        return `${year}-${month}-${day}, ${hour}:${minute}`
    } else if (format === 'monthyear') {
        const year = value.getFullYear()
        const month = monthNames[value.getMonth()]
        return `${month}-${year}`
    } else if (format === 'yyyy-mm-dd') {
        const year = value.getFullYear()
        let month = (value.getMonth() + 1).toString()
        if (month.length === 1) {
            month = `0${month}`
        }
        let day = value.getDate().toString()
        if (day.length === 1) {
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
    } else {
        throw 'incorrect datetime format'
    }
}
