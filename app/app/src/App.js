import { useEffect, useState } from 'react';
import { getMessage } from './api';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    getMessage()
      .then(response => {
        setMessage(response.data.message);
        setApiUrl(process.env.NODE_ENV === 'development' 
          ? process.env.REACT_APP_API_BASE_URL
          : process.env.REACT_APP_API_BASE_URL_PROD);
      })
      .catch(error => {
        setMessage('Error connecting to backend');
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message || 'Loading...'}</h1>
        <p>Connected to: {apiUrl}</p>
        <p>Running in {process.env.NODE_ENV} mode</p>
      </header>
    </div>
  );
}

export default App;
