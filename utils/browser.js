/* 浏览器操作 */
// 1. 复制内容到剪切板
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// 2. 清除所有cookie
export const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie =
  cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new
  Date(0).toUTCString()};path=/`));
// 3. 获取选中的文本  
export const getSelectedText = () => window.getSelection().toString();
// 4. 检测是否是黑暗模式
export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches
// 5. 滚动到页面顶部
export const goToTop = () => window.scrollTo(0, 0);
// 6. 判断当前标签页是否激活
export const isTabInView = () => !document.hidden;
// 7. 判断当前是否是苹果设备
export const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// 8. 是否滚动到页面底部
export const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
// 9. 重定向到一个URL
export const redirect = url => location.href = url
// 10. 打开浏览器打印框
export const showPrintDialog = () => window.print()