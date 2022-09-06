import "../assets/Navigation.css";
import "../assets/Animations.css";

const Navigation = () => {
  const navOptions = [
    {
      name: "about",
    },
    {
      name: "skills",
    },
    {
      name: "projects",
    },
    {
      name: "contact",
    },
  ];
  return (
    <div className="nav fadeIn">
      <div className="navContainer">
        <h1>josh</h1>
        <div className="navOptions">
          {navOptions.map((item) => {
            return <div key={item.name}>{item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
