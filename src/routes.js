import Home from './Home/Home'
import About from './About/About'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    link: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    component: About,
    link: {
      title: 'About'
    }
  }
]

export default routes
