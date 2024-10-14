import React from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";


const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    MODEL: "/:model/:id",
    ERROR_PAGE: "/page/error"
} as const;

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    Здесь будет навигация
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            ADIDAS
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            PUMA
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            ABIBAS
                        </NavLink>
                    </S.NavWrapper>
                </S.Nav>
                <S.Content>
                    {/*Здесь будут кроссовки*/}
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>

                        <Route path={PATH.ERROR_PAGE} element={<Error404/>}/>
                        <Route path={"/*"} element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}




export default App;
