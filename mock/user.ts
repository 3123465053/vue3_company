//此文件用于模拟假接口
function createUserList(){
    return [
        {
            userId:1,
            avatar:"https://img1.baidu.com/it/u=3454520222,1120783283&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
            username:"admin",
            password:'111111',
            desc:"平台管理员",
            roles:["平台管理员"],
            buttons:['cuser.detail'],
            routes:['home'],
            token:'Admin Token'
        },

        {
            userId:2,
            avatar:"https://i2.hdslb.com/bfs/archive/fa667d217c9c97ae5b90959f7003ae6801e71fa6.jpg",
            username:"system",
            password:'111111',
            desc:"系统管理员",
            roles:["系统管理员"],
            buttons:['cuser.detail','cuser.user'],
            routes:['home'],
            token:'System Token'
        }
    ]
}

export default[
    //登陆接口
    {
        url:"/api/user/login",
        method:'post',
        response:({body})=>{
            const {username,password}=body;
            const checkUser=createUserList().find((item)=>item.username===username&&item.password===password)

            if(!checkUser){
                return {code:201,data:{
                    message:"账号或者密码不正确"
                }}
            }
            const {token}=checkUser
            return {code:200,data:{token}}
        }
    },

    //获取用户信息
    {
        url:"/api/user/info",
        method:'get',
        response:({request})=>{
            const token=request.headers.token;
            const checkUser=createUserList().find((item)=>item.token===token)
            //返回失败信息
            if(!checkUser){

            }

          return {code:200,data:{checkUser}}
        }
    },

]