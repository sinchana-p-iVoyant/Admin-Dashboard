import './App.css'
// import theme
import { ThemeProvider } from './ThemeContext'
// import Router
import { Routes, Route } from 'react-router-dom'
// import global components
import Sidebar from './scenes/global/sidebar/Sidebar'
import Topbar from './scenes/global/topbar/Topbar'

// import pages
// import Dashboard from './scenes/dashboard'
// import {Team} from './scenes/team'
// import {Contacts} from './scenes/contacts'
// import {Invoices} from './scenes/invoices'
// import {Form} from './scenes/form'
// import Bar from './scenes/bar'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calendar from './scenes/calendar'

const App: React.FC = () => {
  return (
    <ThemeProvider >
      <div className="app">
        <Sidebar /> 
        
        <main className="content">
          <Topbar />
          <Routes> 
              {/* <Route path='/' element={ <Dashboard/> } /> */}
              {/* <Route path='/team' element={ <Team/> } /> */}
              {/* <Route path='/contacts' element={ <Contacts/> } /> */}
              {/* <Route path='/invoices' element={ <Invoices/> } /> */}
              {/* <Route path='/form' element={ <Form/> } /> */}
                {/* <Route path='/bar' element={ <Bar/> } /> */}
                {/* <Route path='/pie' element={ <Pie/> } /> */}
                {/* <Route path='/line' element={ <Line/> } /> */}
                {/* <Route path='/faq' element={ <FAQ/> } /> */}
                {/* <Route path='/geography' element={ <Geography/> } /> */}
                {/* <Route path='/calendar' element={ <Calendar/> } /> */}
          </Routes>

        </main>
      </div>      
      </ThemeProvider>
  )
}

export default App

