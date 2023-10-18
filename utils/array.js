/* 数组处理 */
// 1. 从数组中移除重复项
export const removeDuplicates = (arr) => [...new Set(arr)];
// 2. 判断数组是否为空
export const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
// 12. 合并两个数组
export const merge = (a, b) => a.concat(b);