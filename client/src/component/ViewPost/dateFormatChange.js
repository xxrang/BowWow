//"2021-04-02T15:00:37Z" 이런형식이라면.
let date = "2021-04-02T15:00:37Z"
date.split('T')
let dateArr = date.split('T')
dateArr[0].replaceAll('-','.')