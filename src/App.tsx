import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SongTrack from "./pages/SongTrack"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<SongTrack />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
