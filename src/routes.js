import Home from './Home/Home'
import About from './About/About'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    link: {
      title: 'Start'
    }
  },
  {
    path: '/priser',
    component: About,
    link: {
      title: 'Priser'
    }
  },
  {
    path: '/galleri',
    component: About,
    link: {
      title: 'Galleri'
    }
  },
  {
    path: '/om',
    component: About,
    link: {
      title: 'About'
    }
  }
]

export default routes
