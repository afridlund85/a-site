import Home from './Pages/Home/Home'
import Weddings from './Pages/Weddings/Weddings'
import Business from './Pages/Business/Business'
import Contact from './Pages/Contact/Contact'
import Prices from './Pages/Prices'
import Gallery from './Pages/Gallery/Gallery'

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
    path: '/brollop',
    exact: true,
    component: Weddings,
    link: {
      title: 'Bröllop',
      icon: 'home'
    }
  },
  {
    path: '/foretag_och_event',
    exact: true,
    component: Business,
    link: {
      title: 'Företag & Event',
      icon: 'home'
    }
  },
  {
    path: '/priser',
    exact: true,
    component: Prices,
    link: {
      title: 'Priser',
      icon: 'usd'
    },
    sub: [
      {
        path: '/priser/foretag',
        component: Business,
        link: {
          title: 'Företag & Event',
          icon: 'usd'
        }
      },
      {
        path: '/priser/b',
        component: Home,
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
