import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'

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
      title: 'Om mig'
    }
  },
  {
    path: '/kontakt',
    component: Contact,
    link: {
      title: 'Kontakt'
    }
  }
]

export default routes
