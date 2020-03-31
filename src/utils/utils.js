//登录校验，这里简单判断用户是否处于已登录状态
export const checkAuth = () => localStorage.getItem("username")