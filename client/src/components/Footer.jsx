const Footer = ({ children }) => {
  const style = {
    backgroundColor: "rgb(178,63,181, 0.8)",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  };

  const phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  };

  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        <p>© 2022 - Food Roulette - LaKeysha Adams</p>
      </div>
    </div>
  );
};

export default Footer;
