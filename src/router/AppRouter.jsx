import { Routes, Route } from 'react-router';
import ItemListContainer from '../components/ItemListContainer';
import CartContainer from '../components/CartContainer';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
  );
}

export default AppRouter;