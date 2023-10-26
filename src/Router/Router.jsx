import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./../Components/PostComponent/Post";
import PostDetail from "../Components/PostComponent/PostDetail";
import Main from "../Components/UI/Main";
import Login from "./../Components/Login/Login";

const Router = (props) => {
  const isLogin = false;

  const loginPage = () => {
    if (isLogin) {
      return <Main />;
    } else {
      return <Login />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={loginPage} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
