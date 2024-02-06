import Navigations from './navigations';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <div className="bg-orange-1 text-orange-9">
      <Navbar />
      <div className="py-15 px-2 md:px-4 mx-auto container overflow-hidden">
        <Navigations />
      </div>
      <Footer />
    </div>
  );
}

export default App;
