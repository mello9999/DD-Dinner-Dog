import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import HomePage from '../components/pages/home/Home';
import RegisterPage from '../components/pages/Register';
import ProfilePage from '../components/pages/Profile';
import ChatRoom from '../components/ChatRoom/Home';
import Setting from '../components/pages/setting/Setting';

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
     },
    home: {
        url: "/home",
        component: HomePage
    },
    setting: {
        url: "/setting",
        component: Setting
    }

}

// Role access control
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.profile,
            components.chat,
            components.home,
            components.setting
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.home,
            components.login,
            components.register,
            components.chatroom,
            components.setting,
        ],
        redirectRoutes: "/profile"
    }
}