import React from 'react';
import Mix from './Mix';

const Home = props => {
  return (
    <div className="flex flex-wrap justify-between mixes ph3 ph4-l">

      <div className="mix mb4">
        <Mix name="Live at the Paradise" id="/billbrewster/bill-brewster-katie-barber-live-at-the-paradise-farage-22nd-august-2020/" {...props} />
      </div>

      <div className="mix mb4">
        <Mix name="Beats" id="/ThePVSH/nahhphet/" {...props} />
      </div>


      <div className="mix mb4">
        <Mix name="Polly Ritmo" id="/TheVinylFactory/vf-live-poly-ritmo-5/" {...props} />
      </div>
    </div>
  )
}


export default Home;
