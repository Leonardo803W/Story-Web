import { Outlet } from "react-router-dom";

import GlobalNavbarStory from "../globalComponents/GlobalNavbar";
import GlobalFooter from "../globalComponents/GlobalFooter";

const MainLayout = () => {

  return (
    <section className="position-relative overflow-hidden">
      <header>
        <GlobalNavbarStory/>
      </header>

      <section className = "mainLayout">
        <main>
          <Outlet />
        </main>

        <footer>
            <GlobalFooter />
        </footer>
      </section>
    </section>
  );
};

export default MainLayout;
