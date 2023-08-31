import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub02 } from "./pages/Sub02";
import { Sub01 } from "./pages/Sub01";
import { PageNotFound } from "./pages/PageNotFound";
import { Sub03 } from "./pages/Sub03";
import { Sub04 } from "./pages/Sub04";
import { HeaderEx } from "./components/HeaderEx";
import { Footer } from "./components/Footer";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <HeaderEx />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<PageNotFound />}></Route>
        <Route path="/sub03" element={<Sub03 />} />
        <Route path="/sub04" element={<Sub04 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// *react router dom
// =>리액트에서 경로를 이동할 때 사용
// =>Router(브라우저 또는 해쉬) -> Routes -> Route
// =>Route는 path(경로) 와 element(컴포넌트) 속성으로 구성
// =>HashRouter는 /#/으로 url에 입력해야되며,
// BrowserRouter는 일반적으로 경로 지정할때 사용하는 /(슬래시) 구성
