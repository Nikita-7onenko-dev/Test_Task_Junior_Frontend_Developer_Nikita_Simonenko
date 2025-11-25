import { GlassEffectLogo } from "./components/GlassEffectLogo/GlassEffectLogo"
import { LoadingBar } from "./components/LoadingBar/LoadingBar"
import { Logo } from "./components/Logo/Logo"


function App() {

  return (
    <>
      <header>
        <Logo/>
      </header>
      <main>
        <LoadingBar/>
        <GlassEffectLogo/> 
      </main>
    </>
  )
}

export default App
