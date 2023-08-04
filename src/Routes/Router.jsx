import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import PageNotFound from './../Pages/Errors/PageNotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
