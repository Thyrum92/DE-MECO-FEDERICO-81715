import { Routes, Route } from 'react-router';
import ItemListContainer from '../components/ItemListContainer';
import CartContainer from '../components/CartContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/categoria/:nombreCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>
  );
}

export default AppRouter;