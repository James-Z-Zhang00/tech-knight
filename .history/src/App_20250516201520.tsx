import MainLayout from './layouts/MainLayout'
import ExperienceLayout from './layouts/ExperienceLayout'
import Home from './pages/Home'
import Experience from './pages/Experience'

function App() {
  return (
    <div style={{
      height: '100vh',
      overflowY: 'auto',
      scrollBehavior: 'smooth'
    }}>
      <section id="home">
        <MainLayout>
          <Home />
        </MainLayout>
      </section>
      <section id="experience">
        <ExperienceLayout>
          <Experience />
        </ExperienceLayout>
      </section>
    </div>
  )
}

export default App
