/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */

const Playlist = () => {
  return (
    <div className="playlist">
      <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
      <div className="spotify_container">
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/show/2brQuhZwYWRJZtrj6fxeUH?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="spotify_column">
          <iframe
            className="spotify_iframe"
            src="https://open.spotify.com/embed/playlist/5pF2e0aXH4QNe2V7AgMXDU?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
