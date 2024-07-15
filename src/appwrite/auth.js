import conf from'../conf/conf.js'
import {Client, Account, ID} from "appwrite"
export class AuthService{
    client= new client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(cong.appwriteProjectId);
        this.account = new this.Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email,password,name);
            if(userAccount){
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }


    async login(){
        try{
            await this.account.createEmailSession(email,password)
        }
        catch(error){
            throw error;
            console.log("Appwrite service::login::error",error)
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("appwrite service::getCurrentUser::error",error);

        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();

        }
        catch(error){
            console.log("Appwrite service::logout::error",error)
        }
    }
}
const authService= new AuthService();

export default AuthService;
