import * as user from "./action-type";

// 保存登录状态
export const login = status => (
  {type: user.LOGIN,
    userStatus: {
      ifLogged: status
    }
  }
)

// 保存退出状态
export const logout = status => (
  {type: user.LOGOUT,
   userStatus: {
     ifLogged: status
   }
  }
)