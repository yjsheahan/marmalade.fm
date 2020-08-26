import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';

const Mixcloud = window.Mixcloud;

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: ''
    };
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    await this.widget.play();
    console.log(this.widget);
  }

  componentDidMount() {
    this.mountAudio();
  }

  actions = {
    togglePlay: () => {
    this.widget.togglePlay();
    },
    playMix: mixName => {
      // Load a new upload by key (e.g. /spartacus/lambiance/).
      // Pass in startPlaying=true to start playing once loaded.
      // Returns a promise that is resolved once the new upload has loaded.
      this.widget.load(mixName, true);
    }
  }

  playMix = mixName => {
    // Load a new upload by key (e.g. /spartacus/lambiance/).
    // Pass in startPlaying=true to start playing once loaded.
    // Returns a promise that is resolved once the new upload has loaded.
    this.widget.load(mixName, true);
  }


  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            {/* featured mix (needs styling and updating) */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              {/* header */}
              <Header />
              <Route exact path="/" component={() => <Home {...this.state} {...this.actions} />} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
            <div>
              <button onClick={() => this.playMix('/TheVinylFactory/vf-live-poly-ritmo-5/')}>Play Mix
              </button>
            </div>
          </div>
          {/* audioplayer */}
          <iframe width="100%" height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Falexandar-matic%2Fchoose-the-sign-of-your-day%2F"
            frameBorder="0"
            title="audioplayer"
            className="db fixed bottom-0 z-5"
            ref={player => (this.player = player)}
            allow="autoplay"
          />
        </div>
      </Router>
    );
  }
}

export default App;
