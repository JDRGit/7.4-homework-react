import './App.css';
import Header from '../src/components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article img={require('./images/blog-image-1.jpg')} h1="On the Street in Brooklyn"/>
      <Article img={require('./images/blog-image-2.jpg')} h1="Vintage in Vogue"/>
      <Footer />
    </div>
  );
}

export default App;
