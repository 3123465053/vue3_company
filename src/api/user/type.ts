//定义网络请求相关的数据类型

//登陆参数
export interface loginForm {
    username: string,
    password: string
}

export interface dataType {
    token?: string,   //成功的数据
    message?:string  //失败返回的消息提示数据
}

//登陆返回值
export interface loginResponseData {
    code: number,
    data: dataType
}

interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}

interface user {
    checkUser: userInfo
}

//获取用户信息相关数据类型
export interface userResponseData {
    code: number,
    data: user
}
