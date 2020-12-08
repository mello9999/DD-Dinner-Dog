import TodoPage from '../components/pages/Index';
import LoginPage from '../components/pages/Login';
import HomePage from '../components/pages/home/Home';
import RegisterPage from '../components/pages/Register';

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
    }

}

// Role access control
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.home,
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.home,
            components.login,
            components.register
        ],
        redirectRoutes: "/home"
    }
}