// document.documentElement 是全局变量时
const el = document.documentElement;
// const el = document.getElementById('xxx')

// 获取 css 变量

const getVarColor = () => {
  return getComputedStyle(el).getPropertyValue(`--el-color-primary`);
};
// 设置 css 变量

const setVarColor = (value: string) => {
  el.style.setProperty('--el-color-primary', value);
};
export { getVarColor, setVarColor };
