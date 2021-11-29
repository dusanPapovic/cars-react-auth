import HttpService from './HttpService';

class AuthService extends HttpService{

    async login(credentials) {
        try {
    const {data}=await this.client.post("/auth/login",credentials);
    console.log("login success",data);
    localStorage.setItem("token",data.token);
        } catch (error) {
            console.log(error);
          }
}

async register(credentials) {
    try {
const {data}=await this.client.post("/auth/register",credentials);
console.log("register success",data);
// localStorage.setItem("token",data.token);
    } catch (error) {
        console.log(error);
      }
}

async logout() {
    try {
const {data}=await this.client.post("/auth/logout");
console.log("logout success",data);
localStorage.removeItem('token');
    } catch (error) {
        console.log(error);
      }
}

async getMyProfile(){
try {
    const {data}=await this.client.get("/auth/me");
    console.log("got user",data);
    return data;
        } catch (error) {
            console.log(error);
          }
        }

}
export default new AuthService();