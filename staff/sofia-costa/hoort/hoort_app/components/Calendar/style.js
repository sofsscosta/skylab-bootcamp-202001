import { StyleSheet } from 'react-native'

const STYLESHEET_ID = 'stylesheet.calendar.header'

export default function (theme = {}) {
    const appStyle = { ...defaultStyle, ...theme }
    return StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 6,
            alignItems: 'center'
        },
        monthText: {
            fontSize: appStyle.textMonthFontSize,
            fontFamily: appStyle.textMonthFontFamily,
            fontWeight: appStyle.textMonthFontWeight,
            color: appStyle.monthTextColor,
            margin: 20
        },
        arrow: {
            padding: 10,
            ...appStyle.arrowStyle
        },
        arrowImage: {
            tintColor: appStyle.arrowColor
        },
        disabledArrowImage: {
            tintColor: appStyle.disabledArrowColor
        },
        week: {
            marginTop: 7,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        dayHeader: {
            marginTop: 2,
            marginBottom: 7,
            width: 32,
            textAlign: 'center',
            fontSize: appStyle.textDayHeaderFontSize,
            fontFamily: appStyle.textDayHeaderFontFamily,
            fontWeight: appStyle.textDayHeaderFontWeight,
            color: appStyle.textSectionTitleColor
        },
        leftArrow: {
            height: 50,
            width: 50,
            tintColor: 'grey',
        },
        rightArrow: {
            height: 50,
            width: 50,
            tintColor: 'grey'
        },
        ...(theme[STYLESHEET_ID] || {})
    })
}