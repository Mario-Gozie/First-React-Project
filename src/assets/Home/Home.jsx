import Navigation from "./Navigation";

import Header from "./Header";

function Home() {
  const navContents = ["Home", "About", "Projects", "Contact"];
  return (
    <>
      <section className="Home" id="Home">
        <Navigation navContent={navContents} />
        <Header />
      </section>
    </>
  );
}

export default Home;
