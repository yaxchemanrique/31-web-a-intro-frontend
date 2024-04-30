import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentsStyles/App.css'
import Form from './Components/Form.jsx'
import Header from './Components/Header.jsx'
import Cards from './Components/Cards.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <div>
      <Header />
      <Form />
      <Cards />
      <Footer color={"red"}/>
      <Footer color={"blue"}/>
    </div>
  )
}

export default App
