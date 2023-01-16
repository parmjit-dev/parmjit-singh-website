/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Playlist = () => {
  return (
    <div className="playlist">
      <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
      <div className="playlist-greeting_container">
        <h2 className="playlist-greetings"> - Playlists & Recommendations - </h2> <br />
        <h3 className="playlist-hint"> More About Me </h3>
        <a rel="noopener noreferrer" href="/" className="homepage">
          <FontAwesomeIcon icon={faHome} size="3x" />
        </a>
      </div>
      <div className="spotify_container">
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/show/2brQuhZwYWRJZtrj6fxeUH?utm_source=generator"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/playlist/5pF2e0aXH4QNe2V7AgMXDU?utm_source=generator"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
	<div className="spotify_column" id="gr_updates_widget">
	  <iframe  id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=370&num_updates=4&user=143207530&width=250" width="248" height="300"></iframe>
          <div id="gr_footer">
            <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png" /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Playlist;
