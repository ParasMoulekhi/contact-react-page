import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <img
        src="/images/logo.png"
        alt="logo"
        style={{ width: "50px", height: "47px" }}
      />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
