/* eslint-disable react/button-has-type */
import { useAlert } from 'react-alert';

const App = () => {
  const alert = useAlert();

  return (
    <button
      onClick={() => {
        alert.show('Oh look, an alert!');
      }}
    >
      Show Alert
    </button>
  );
};

export default App;
