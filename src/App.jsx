import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Error404 } from "./components/Error404";
import { CartProvider } from "./Context/CartContext";
import { Car } from "./components/Car";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="general_background">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Products" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Products" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path='/car' element={<Car />}/>           
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
