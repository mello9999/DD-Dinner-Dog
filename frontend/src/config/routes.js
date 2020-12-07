import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import ProfilePage from '../components/pages/Profile';
import RegisterPage from '../components/pages/Register';
import ChatMay from '../components/ChatMay/index';

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
    },
    chat: {
        url: "/chat",
        component: ChatMay
    }

}

// Role access control
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.chat
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.profile,
            components.login,
            components.register,
            components.chat
        ],
        redirectRoutes: "/profile"
    }
}