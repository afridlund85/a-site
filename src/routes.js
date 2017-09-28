import Home from './Home/Home'
import Contact from './Contact/Contact'
import Prices from './Prices/Prices'
import Gallery from './Gallery/Gallery'

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
    },
    sub: [
      {
        path: '/priser/a',
        component: Prices,
        link: {
          title: 'Bröllop',
          icon: 'usd'
        }
      },
      {
        path: '/priser/b',
        component: Prices,
        link: {
          title: 'Porträtt',
          icon: 'usd'
        }
      },
    ]
  },
  {
    path: '/galleri',
    component: Gallery,
    link: {
      title: 'Galleri',
      icon: 'camera'
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
