import { Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomePage from './components/modules/home';

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: 'green',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}

export default App;
