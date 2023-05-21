import {useState} from 'react'
class Auth {
    constructor() {
        this.authenticated = false;
        this.admin = false;
        this.uid = 0;
    }
    loginauth(id){
        this.authenticated = true;
        this.uid = id;
    }
    logoutauth(){
        this.authenticated = false;
        this.uid = 0;
    }
    isAuthenticated(){
        return this.authenticated;
    }
    getid(){
        return this.uid;
    }
    isadmin(){
        if(this.uid === 1){
            return this.admin = true;
        }
        else{
            return this.admin = false;
        }
    }

}

export default new Auth();