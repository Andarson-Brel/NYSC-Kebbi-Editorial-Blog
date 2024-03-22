import React, { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { AddEditBlog } from "./pages/addEditBlog";
import { About } from "./pages/about";
// import { isEmpty, orderBy } from "lodash";
import { NotFound } from "./pages/notFound";
import { SignUp } from "./pages/signUp";
import Header from "./components/header";
import Footer from "./components/footerComponent";
import { Login } from "./pages/login";
import Blog from "./pages/blog";
import BlogPage from "./pages/blogPost";
import { auth, db } from "./firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  onSnapshot,
  getDocs,
  query,
  DocumentSnapshot,
  docs,
} from "firebase/firestore";

import Spinner from "./components/Spinner";
import { doc } from "firebase/firestore";
// import { d} from "./firebase";
//=================================== main App========================================
function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("home");
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    function checkAuthUser() {
      return auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else setUser(null);
      });
    }
    checkAuthUser();
  }, []);
  useEffect(() => {
    const unSub = onSnapshot(
      collection(db, "blogpost"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTag = [...new Set(tags)];
        setTags(uniqueTag);
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    // console.log(blogs);
    return () => unSub();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  function handleLogout() {
    signOut(auth).then(() => {
      // console.log("i was clicked");
      setActive("login");
      setUser(null);
      navigate("/login");
    });
  }
  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogpost", id));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="App">
      <Header
        active={active}
        setActive={setActive}
        user={user}
        handleLogout={handleLogout}
      />
      {/* <Home /> */}
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <Home blogs={blogs} loading={loading} setLoading={setLoading} />
          }
        />
        <Route
          path="/blog-page/blog-post/:id"
          element={<BlogPage setActive={setActive} blogs={blogs} user={user} />}
        />
        <Route
          path="/create"
          element={user ? <AddEditBlog user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/update/:id"
          element={<AddEditBlog setActive={setActive} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/kzSzCb1cts7aF6Pvm3RJ"
          element={<SignUp setActive={setActive} />}
        />
        <Route path="/login" element={<Login setActive={setActive} />} />
        <Route
          path="/blog-page"
          element={
            <Blog
              blogs={blogs}
              user={user}
              handleDelete={handleDelete}
              tags={tags}
              // getBlogs={getBlogs}
            />
          }
        />
        {/* <Route path="/blog-post" element={<BlogPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
// ========================================main app==========================
export default App;
