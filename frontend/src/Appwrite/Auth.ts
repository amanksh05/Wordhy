import { Account, Client, OAuthProvider } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ae65aa002b9c136007')
    
    const account = new Account(client);

// export const loginGoogle = async (): Promise<void> => {
//     try {
//         await account.createOAuth2Session(
//             OAuthProvider.Google,
//             'http://localhost:3000/home',
//             'http://localhost:3000/fail',
//         );
//         console.log('Login success')
//     } catch (error) {
//         console.log("Login failed")
//     }
// }

// export const profile = async (): Promise<void> => {
//     try {
//         const profile = await account.get()
//         console.log(profile);
//     } catch (error) {
//         console.log("Failed to fetch the data");
//     }


// }

// export const logout = async():Promise<void> =>{
//     try {
//         await account.deleteSession('current');
//     } catch (error) {
        
//     }
// }

// export const token = async ():Promise<void> =>{
//     const session = await account.getSession('current');
//     console.log(session.provider);
//     console.log(session.providerUid);
//     console.log(session.providerAccessToken);
//     console.log(session.providerAccessTokenExpiry);
// }

export {client, account};