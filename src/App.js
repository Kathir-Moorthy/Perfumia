import Navbar from "./components/Navbar";
import Search from "./components/Searchbar";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";

// App
function App() {
    return (<div><Navbar></Navbar> <Search></Search> <Product></Product> <About></About> <Footer></Footer></div>)
    // Instead of using <div>...</div> we can use <>..</> which are called fragments as they are more light weight to use
}

export default App