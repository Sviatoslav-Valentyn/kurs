import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

const AppRouter = () => {
  return (
    <div className="mt-4">
      <Routes>
        {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element}>
                {route.children && route.children.map(childRoute => (
                  <Route key={childRoute.path} path={childRoute.path} element={childRoute.element}/>
                ))}
            </Route>
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;