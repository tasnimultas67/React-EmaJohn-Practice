import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Pages/Shop/Shop';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import ManageInventoryHere from './Components/Pages/Manage Inventory Here/ManageInventoryHere';
// import OrderReview from './Components/Pages/Order Review/OrderReview';
// import Shop from './Components/Pages/Shop/Shop';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Shop></Shop>
      {/* <BrowserRouter>
    <Routes>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/oder-review" element={<OrderReview/>}/>
        <Route path="/manage-inventory-here" element={<ManageInventoryHere/>}/>
    </Routes>
  </BrowserRouter> */}
    </div>
  );
}

export default App;
