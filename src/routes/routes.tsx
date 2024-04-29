import React from "react"
import {Routes, Route,} from "react-router-dom"
import PagesLayout from "../layouts/PagesLayout";
import PageTemplates from "../components/template-pages/pages/PageTemplates";
import EmailTemplates from "../components/template-pages/emails/EmailTemplates";

const Routers = () => {


    return (
        <Routes>
            <Route
                path='/'
                element={<PagesLayout/>}
            >
                <Route path={"/email"} element={<EmailTemplates/>}/>
                <Route path={"/pages"} element={<PageTemplates/>}/>
            </Route>
        </Routes>
    )
}

export default Routers
