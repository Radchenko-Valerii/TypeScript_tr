import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import { CardPage } from './pages/CardPage';
import { DragEventPage } from './pages/DragEventPage';
import { EventsPage } from './pages/EventsPage';
import { ToDoPage } from './pages/ToDoPage';
import { UserListPage } from './pages/UserListPage';
import { UserPage } from './pages/UserPage';

function App() {
  // const users: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Nik",
  //     email: "nik@nik.com",
  //     address: {
  //       city: "Zaporizhzhie",
  //       zipcode: "69006",
  //       street: "Soborniy 77",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Edmiral Hakumba",
  //     email: "kingof_CONGO@drc.gov.com",
  //     address: {
  //       city: "Kinshasa",
  //       zipcode: "Postal codes are not used in Congo",
  //       street: "Diktator str",
  //     },
  //   },
  // ];

  
  

  return (
    <div>
      <BrowserRouter>
      <div>
        <NavLink to="/users">
          Users
        </NavLink>
        <NavLink to="/todos">
          ToDo
        </NavLink>
        <NavLink to="/events">
          Events
        </NavLink>
        <NavLink to="/drags">
          Drag
        </NavLink>
        <NavLink to="/founder">
          Founder
        </NavLink>
      </div>
      <Route path={"/users"} exact>
        <UserListPage/>
      </Route>
      <Route path={"/todos"} exact>
        <ToDoPage/>
      </Route>
      <Route path={"/users/:id"} exact>
        <UserPage/>
      </Route>
      <Route path={"/events"} exact>
        <EventsPage/>
      </Route>
      <Route path={"/drags"} exact>
        <DragEventPage/>
      </Route>
      <Route path={"/founder"} exact>
        <CardPage/>
      </Route>
      
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
