/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-13 18:50:36
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-13 18:57:43
 */
export default function({ isHMR, route, redirect }) {
  if (isHMR) return; // 是否热更新
  if (route.fullPath === '/') { // 重定向
    return redirect('/home');
  }
}
