import './App.css';
import {Layout} from "./layouts/Layout/Layout";
import {NotFoundPage, PostPage, PostsPage, UserPage, UsersPage} from "./pages";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element = {<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={':userId'} element={<UserPage/>}>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
