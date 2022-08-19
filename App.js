import './App.css';
import Content1 from './components/content1';
import Sidebar from './components/sidebar';
import Maincontent from './components/maincontent';
import Footer from './components/footer';
import Logo from './components/logo';
import Content2 from './components/content2';
import Content3 from './components/content3';
function App() {
  return (
    <div>
      <div className='left'>
        <Sidebar />
      </div>
      <div className='right'>
        <Logo />
        <Maincontent />
      <div className='content'>
        <div></div>
        <Content1 />
        <Content2 />
        <Content3 />
        <div></div>
      </div> 
        <Footer/>
      </div>
    </div>
    );
}

export default App;
