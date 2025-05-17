import MainLayout from './layouts/MainLayout'
import ExperienceLayout from './layouts/ExperienceLayout'
import Home from './pages/Home'
import Experience from './pages/Experience'

function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
      <ExperienceLayout>
        <Experience />
      </ExperienceLayout>
    </>
  )
}

export default App
