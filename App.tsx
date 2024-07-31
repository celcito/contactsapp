
import {useFonts, Roboto_400Regular, Roboto_700Bold, } from '@expo-google-fonts/roboto';
import { Home } from '@/app/home';
import { Loading } from '@/components/loading';
export default function App() {
  const[fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  if(fontsLoaded){
     return <Loading/>
  }
  return <Home />
}

