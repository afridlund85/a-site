import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Prices from './Prices/Prices'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    link: {
      title: 'Start',
      icon: 'home'
    }
  },
  {
    path: '/priser',
    component: Prices,
    link: {
      title: 'Priser',
      icon: 'usd'
    }
  },
  {
    path: '/galleri',
    component: About,
    link: {
      title: 'Galleri',
      icon: 'camera'
    }
  },
  {
    path: '/om',
    component: About,
    link: {
      title: 'Om mig',
      icon: 'info'
    }
  },
  {
    path: '/kontakt',
    component: Contact,
    link: {
      title: 'Kontakt',
      icon: 'envelope-o'
    }
  }
]

export default routes
