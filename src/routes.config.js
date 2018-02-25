import Home from './Pages/Home/Home'
import Weddings from './Pages/Weddings/Weddings'
import Business from './Pages/Business/Business'
import Contact from './Pages/Contact/Contact'
import Prices_Business from './Pages/Prices/Business'
import Prices_Wedding from './Pages/Prices/Weddings'
import Prices_Prints from './Pages/Prices/Prints'
import Prices_Portraits from './Pages/Prices/Portraits'
import Gallery from './Pages/Gallery/Gallery'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    link: {
      title: 'Start',
      icon: 'fas fa-home'
    }
  },
  {
    path: '/brollop',
    exact: true,
    component: Weddings,
    link: {
      title: 'Bröllop',
      icon: 'far fa-gem'
    }
  },
  {
    path: '/foretag_och_event',
    exact: true,
    component: Business,
    link: {
      title: 'Företag & Event',
      icon: 'far fa-address-card'
    }
  },
  {
    path: '/galleri',
    component: Gallery,
    link: {
      title: 'Galleri',
      icon: 'fas fa-camera'
    },
    sub: [
      {
        path: '/galleri/brollop',
        component: Prices_Wedding,
        link: {
          title: 'Brollop'
        }
      },
      {
        path: '/galleri/foretag',
        component: Prices_Business,
        link: {
          title: 'Företag & Event'
        }
      },
      {
        path: '/galleri/prints_och_tavlor',
        component: Prices_Prints,
        link: {
          title: 'Prints och tavlor'
        }
      }
    ]
  },
  {
    path: '/priser',
    exact: true,
    component: Prices_Business,
    link: {
      title: 'Priser',
      icon: 'fas fa-dollar-sign'
    },
    sub: [
      {
        path: '/priser/brollop',
        component: Prices_Wedding,
        link: {
          title: 'Brollop'
        }
      },
      {
        path: '/priser/foretag',
        component: Prices_Business,
        link: {
          title: 'Företag & Event'
        }
      },
      {
        path: '/priser/prints_och_tavlor',
        component: Prices_Prints,
        link: {
          title: 'Prints och tavlor'
        }
      },
      {
        path: '/priser/portratt',
        component: Prices_Portraits,
        link: {
          title: 'Porträtt'
        }
      }
    ]
  },
  {
    path: '/kontakt',
    component: Contact,
    link: {
      title: 'Kontakt',
      icon: 'far fa-envelope'
    }
  }
]

export default routes
