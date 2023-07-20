import Social from '../components/social/social';

const Playlist = () => {
  const socialProps = {landing: false}
  return (
    <div className="playlist">
      <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
      <div className="playlist-greeting_container">
        <h2 className="playlist-greetings"> - Playlists & Recommendations - </h2> <br />
        <h3 className="playlist-hint"> More About Me </h3>
        <h3 className="playlist-hint">
          {' '}
          Thanks for clicking in! this part of my site is to just let people know some of the things
          I enjoy and do in my free time{' '}
        </h3>
        <h3 className="playlist-hint">
          I have been volunteering at my local gurdwara as a guide and mentor for children and young
          adults for the past 9 years.
          <br /> <br />I also study two (Indian Classical) instruments the Harmonium and tabla which I
          play at a semi professional level
        </h3>
      </div>
      <div className="spotify_container">
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/show/6PwE1CIZsgfrhX6Bw96PUN?utm_source=generator&theme=0"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/playlist/2ca4I7M0de9grv8NQm4KYq?utm_source=generator"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="spotify_column" id="gr_updates_widget">
          <iframe
            id="the_iframe"
            src="https://goodreads.com/widgets/user_update_widget?height=370&num_updates=4&user=143207530&width=250"
            width="248"
            height="300"
          ></iframe>
          <div id="gr_footer">
            <a href="https://www.goodreads.com/">
              <img
                alt="Goodreads: Book reviews, recommendations, and discussion"
                src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className="contacts_playlist_container">
        <Social {...socialProps} />
      </footer>
    </div>
  );
};

export default Playlist;
