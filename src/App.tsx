import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import { HeaderProvider } from "./context/HeaderContext/HeaderContext"
import SearchPage from "./pages/Search/SearchPage"
import Login from "./pages/auth/login"

function App() {

  return (
    <HeaderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </HeaderProvider>

  )
}

export default App
