import { DEFAULT, DEFAULT_CONTENTS, NAV, DEFAULT_PRODUCT, DEFAULT_EVENT, DEFAULT_SLIDE, DEFAULT_CUSTOMER_SERVICE } from "./data/default";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainBanner from "./pages/MainBanner";
import MainProduct from "./pages/MainProduct";
import MainContent from "./pages/MainContent";
import MainVisual from "./pages/MainVisual";
import MainMovie from "./pages/MainMovie";
import TopBanner from "./pages/TopBanner";
import MainCS from "./pages/MainCS";
import ToTop from "./pages/ToTop";



const App = () => {
  return (
    <>
      <TopBanner DEFAULT_EVENT={DEFAULT_EVENT} />
      <Header DEFAULT={DEFAULT} NAV={NAV} />
      <MainVisual DEFAULT_SLIDE={DEFAULT_SLIDE} />
      <MainProduct DEFAULT_PRODUCT={DEFAULT_PRODUCT} DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
      <MainBanner DEFAULT_SLIDE={DEFAULT_SLIDE} />
      <MainContent DEFAULT_CONTENTS={DEFAULT_CONTENTS} DEFAULT_PRODUCT={DEFAULT_PRODUCT} />
      <MainMovie DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
      <MainCS DEFAULT_CONTENTS={DEFAULT_CONTENTS} DEFAULT_CUSTOMER_SERVICE={DEFAULT_CUSTOMER_SERVICE} />
      <Footer DEFAULT={DEFAULT} NAV={NAV} />
      <ToTop />
    </>
  )
}

export default App;