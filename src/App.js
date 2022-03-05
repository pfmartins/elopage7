import './App.css';
import { Header, Hero, Testimonials, Team, Benefits, Vacancies, Footer } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Testimonials />
      <Team />
      <Benefits />
      <Vacancies />
      <Footer />
    </div>
  );
}

export default App;
