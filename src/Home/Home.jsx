import React from 'react'

import './home.scss'
import tmp1 from '../assets/images/tmp1.jpg'
import tmp2 from '../assets/images/tmp2.jpg'
import tmp3 from '../assets/images/tmp3.jpg'

const Home = () => {
  return(
    <div className="home">
      <div className="section header">
        <div className="container">
          <h1><em>Fotograf</em>Alexander Hall</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>välkomstrubrik</h2>
          <hr />
          <p>Lorizzle ipsizzle shizzle my nizzle crocodizzle check out this amet,
            break yo neck, yall adipiscing yo. Shit sapizzle da bomb, daahng dawg
            volutpizzle, suscipit fo shizzle, shizzle my nizzle crocodizzle vizzle,
            brizzle. Pellentesque check it out its fo rizzle. Sed check it out.
            Crazy the bizzle boom shackalack stuff things tempizzle doggy.
            Mauris pellentesque nibh hizzle turpizzle. Get down get down izzle
            tortizzle. The bizzle fo shizzle rhoncus daahng dawg. In hizzle
            habitasse platea my shizz. Bizzle dapibizzle. Curabitizzle tellus
            mah nizzle, pretizzle i'm in the shizzle, shizzle my nizzle
            crocodizzle pimpin', eleifend vitae, dang. Bizzle da bomb.
            Integizzle sempizzle velit sizzle crazy.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <img src={tmp1}/>
          <img src={tmp2}/>
          <img src={tmp3}/>
        </div>
      </div>
    </div>
  )
}

export default Home
