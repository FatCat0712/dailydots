import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import AddJournalPage from './pages/AddJournalPage'
import HomePage from './pages/HomePage'
import MyJournalsPage from './pages/MyJournalsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="journals" element={<MyJournalsPage />} />
          <Route path="journal" element={<AddJournalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
