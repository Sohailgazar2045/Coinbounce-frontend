import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/protected/Protected";
import styles from "./App.module.css";
import Login from "./pages/login/Login";
import Signup from "./pages/SignUp/Signup";
import Crypto from "./pages/Crypto/Crypto";
import Blogs from "./pages/Blogs/Blogs";
import SubmitBlog from "./pages/SubmitBlog/SubmitBlog";
import { useSelector } from "react-redux";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

function App() {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />

            <Route
              path="crypto"
              exact
              element={
                <div className={styles.main}>
                  <Crypto />
                </div>
              }
            />

            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <Blogs />
                  </div>
                </Protected>
              }
            />

            <Route
              path="blog/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <BlogDetails />
                  </div>
                </Protected>
              }
            />

            <Route
              path="blog-update/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <UpdateBlog />
                  </div>
                </Protected>
              }
            />

            <Route
              path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <SubmitBlog />
                  </div>
                </Protected>
              }
            />

            <Route
              path="log-in"
              exact
              element={
                <div className={styles.main}>
                  <Login />
                </div>
              }
            />

            <Route
              path="sign-up"
              exact
              element={
                <div className={styles.main}>
                  <Signup />
                </div>
              }
            />
            {/* <Route
              path="sign-out"
              exact
              element={<div className={styles.main}>Sign Out Page</div>}
            /> */}

            <Route
              path="*"
              exact
              element={
                <div className={styles.main}>
                  <Error />
                </div>
              }
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
