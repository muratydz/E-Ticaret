import './App.css'
import Header from './compoment/Header'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ProductList from './compoment/ProductList'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <ProductList/>
    </Provider>
  )
}

export default App
