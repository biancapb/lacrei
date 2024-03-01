import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import React from "react";

function User() {
  return (
    <>
      <Header />
      <Layout
        textTitle={"Profissional"}
        textSubtitle={
          "Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+."
        }
        type={"pro"}
      />
      <Footer />
    </>
  );
}

export default User;
