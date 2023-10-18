/* 一、日期处理 */
// 1. 检查日期是否有效
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
// 2. 计算两个日期之间的间隔
export const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime())
/ 86400000)
// 3. 查找日期位于一年中的第几天
export const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) /
1000 / 60 / 60 / 24);
// 4. 时间格式化
export const timeFromDate = date => date.toTimeString().slice(0, 8);