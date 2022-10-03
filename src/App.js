import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import BackgroundImg from './components/BackgroundImg';
import Profile from './components/Profile';
import Table from './components/Table.js'
import Input from './components/Input';
import QA from './components/QA'

function App() {
  return (
    <>
      <Navbar />
      <BackgroundImg />
      <Profile />
      <div className='bg-grey-300 container'>
        <Table />
        <Input />
        <QA/>
      </div>
    </>
  );
}

export default App;
