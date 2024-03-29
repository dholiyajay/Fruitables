import { Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { Provider } from 'react-redux';
import { configureStore } from './redux/Reducer/store';

function App() {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Routes >
          <Route exact path='/*' element={<UserRoutes />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path='/admin/*' element={<AdminRoutes />} />
          </Route>
        </Routes>
      </Provider >
    </>
  );
}

export default App;
