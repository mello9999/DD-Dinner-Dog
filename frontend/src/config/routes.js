import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import ProfilePage from '../components/pages/Profile';
import RegisterPage from '../components/pages/Register';
import ChatRoom from '../components/ChatRoom/Home';

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
    chatroom: {
        url: "/chat",
        component:ChatRoom
     }

}

// Role access control
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.profile,
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
            components.chatroom
        ],
        redirectRoutes: "/profile"
    }
}