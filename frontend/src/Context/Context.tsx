import { account } from "@/Appwrite/Auth";
import { OAuthProvider } from "appwrite";
import axios from "axios";
import { createContext, useState, ReactNode, Children, useEffect, useContext } from "react";

interface UserType {
    $id: string;
    name: string;
    email: string;
    xp: number;
}

interface GlobalContextProps {
    user: UserType | null;
    login: () => void;
    logout: () => void;
    updateUser: (userData: Partial<UserType>) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const accountData = await account.get();

                const response = await axios.post("http://localhost:5000/api/users", {
                    appwriteId: accountData.$id,
                    name: accountData.name,
                    email: accountData.email,
                });
                setUser(response.data)
            } catch (error) {
                console.log("User is not logged in")
            }
        }
        getUser();
    }, []);

    const login = async () => {
        account.createOAuth2Session(
            OAuthProvider.Google,
            'http://localhost:3000',
            'http://localhost:3000',
        );
    }

    const logout = async()=>{
        try {
            await account.deleteSession("current");
            setUser(null)
        } catch (error) {
            console.log("Failed to logout",error);
        }
    };

    const updateUser = (userData: Partial<UserType>) => {
        setUser((prevUser) => (prevUser ? { ...prevUser, ...userData } : null));
    };

    return(
        <GlobalContext.Provider value={{user,login,logout,updateUser}}>
            {children}
        </GlobalContext.Provider>
    )


}
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

export default GlobalContext;
