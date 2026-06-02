import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root.js";
import RelatePage from "./pages/Relate.js";
import HomePage from "./pages/Home.js";
function App() {
  const router = createBrowserRouter([
    {
      path :'/',
      element: <RootLayout/>,
      children: [
        {index:true , element:<HomePage/>},
        {path: '/relate' ,element:<RelatePage/>
          
        },
      
      ]
    }  
  ]);

  return <>
    <RouterProvider router={router}/>
  </>;
 

}

export default App;
