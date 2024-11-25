//封装本地储存数据与读取方法
export  function setToken(token:string){
    localStorage.setItem('token',token);
}

export function getToken(){
    return localStorage.getItem('token')
}