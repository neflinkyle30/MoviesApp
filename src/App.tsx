import {QueryClient, QueryClientProvider} from "react-query";
import '@progress/kendo-theme-default/dist/all.css';
import './App.css'
import Movies from "./modules/movies/movies/Movies";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
        <Movies/>
        </QueryClientProvider>
    </>
  )
}

export default App;
