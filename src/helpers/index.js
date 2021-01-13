export const API_URL = 'https://randomuser.me/api/?results=28'

export const CONVERT_DATE = (val) => {
    let temp = val.split('T')
    let date = temp[0].split('-')
    let dd = date[2]
    let mm = date[1]
    return `${dd} - ${mm}`
}

export const SHORT_ID = val => {
    let temp = val.split('-')
    return temp[temp.length-1]
}