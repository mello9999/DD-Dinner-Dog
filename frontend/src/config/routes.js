import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import ProfilePage from '../components/pages/Profile';
import RegisterPage from '../components/pages/Register';
//import {Join, Chat} from '../components/ChatRoom';

const components = {
    todo: {
        url: "/todo",
        component: TodoPage
    },
    login: {
        url: "/login",
        component: LoginPage
    },
    register: {
        url: "/register",
        component: RegisterPage
    },
    profile: {
        url: "/profile",
        component: ProfilePage
    }
    // chatroom: {
    //     url: "/chat",
    //     component:Chat
    // }

}

// Role access control
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.profile
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.profile,
            components.login,
            components.register
        ],
        redirectRoutes: "/profile"
    }
}