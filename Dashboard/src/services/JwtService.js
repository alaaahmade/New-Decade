export default class JwtService {
   static tokenName = 'token';

   static getToken(){
    return localStorage.getItem(this.tokenName);
  }

   static setToken(token){
    return localStorage.setItem(this.tokenName, token);
  }

   static destroyToken() {
    return localStorage.removeItem(this.tokenName);
  }
}
