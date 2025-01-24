function Navigation(props) {
  const navList = props.navContent;

  const allNav = navList.map((nav) => (
    <li>
      <a href="">{nav}</a>
    </li>
  ));

  return (
    <nav>
      <ul>
        {allNav}
        {/* <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          {" "}
          <a href="">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
