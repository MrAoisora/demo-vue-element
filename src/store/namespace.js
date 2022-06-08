/**
 * 闭包函数，返回字符串
 * @param name
 * @returns {function(*): void}
 * 恒等于
 export function withNameSpace2 (name) {
  return key =>
    name + key
}

 */
export function withNameSpace (name) {
  // return key => name + key
  return key => `/${name}/${key}`
}
