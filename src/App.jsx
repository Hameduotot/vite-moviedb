import { Layout, Menu } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          mode="horizontal"
          items={[
            {
              label: <Link to={"/"}> Home</Link>,
              key: "Home",
            },
            {
              label: <Link to={"/about"}>About</Link>,
              key: "About",
            },
            {
              label: <Link to={"/login"}> Login</Link>,
              key: "Login",
            },
          ]}
        />
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;
