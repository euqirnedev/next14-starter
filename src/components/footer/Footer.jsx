import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>euqirnedev</div>
      <div className={styles.text}>euqirnedev © All rights reserved.</div>
    </div>
  );
};

export default Footer;
