
const BIRTH_DATE = new Date(2022, 6, 16);
const TODAY = new Date();

const yearDiff = TODAY.getFullYear() - BIRTH_DATE.getFullYear()
const monthDiff = TODAY.getMonth() - BIRTH_DATE.getMonth()
const dayDiff = TODAY.getDate() - BIRTH_DATE.getDate()


function getMonthlyData() {
    let ageStr = ""
    if (monthDiff < 0) {
        if (yearDiff == 1)
            ageStr = `${12 + monthDiff} months old`
        else
            ageStr = `${yearDiff - 1}.${12 + monthDiff} years old`
    } else {
        ageStr = `${yearDiff}.${Math.abs(monthDiff)} years old`
    }
    return ageStr;
}

const getTotalDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

function getMessageForSameYear() {
    let ageStr = ""
    if (monthDiff == 0) {
        ageStr = `${dayDiff} ${dayDiff === 1 ? 'day' : 'days'} old`
    } else {
        if (dayDiff < 0) {
            if (monthDiff - 1 == 0) {
                ageStr = `${getTotalDaysInMonth(TODAY.getFullYear(), TODAY.getMonth()) - Math.abs(dayDiff)} days old`
            } else
                ageStr = `${monthDiff - 1} month, ${getTotalDaysInMonth(TODAY.getFullYear(), TODAY.getMonth()) - Math.abs(dayDiff)} days old`
        } else if (dayDiff == 0) {
            ageStr = `${monthDiff} ${monthDiff === 1 ? 'month' : 'months'} old`
        } else
            ageStr = `${monthDiff} month, ${dayDiff} days old`
    }
    return ageStr;
}

function isYearDiffZero() {
    return yearDiff == 0
}

function isMonthDiffZero() {
    return monthDiff == 0
}

function getYearlyData() {
    return `${yearDiff} years old`
}

export { getMonthlyData, getMessageForSameYear, isYearDiffZero, isMonthDiffZero, getYearlyData }
