import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import HomePage from '../components/pages/home/Home';
import RegisterPage from '../components/pages/Register';
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
            components.setting,
        ],
        redirectRoutes: "/home"
    }
}