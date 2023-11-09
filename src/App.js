
import GetStarted from "./components/getStarted/GetStarted";
import CustomNav from "./components/navbar/CustomNav";
import Access from "./pages/Access";
import CheckList from "./pages/Checklist";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
    <ResetPassword />
      <ForgotPassword />
      <CheckList />
      <CreateAccount />
      <CustomNav />
      <GetStarted />
      <Access />
    </>
  );
}

export default App;
