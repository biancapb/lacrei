import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import React from "react";

function User() {
  return (
    <>
      <Header />
      <Layout
        textTitle={"Pessoa Usuária"}
        textSubtitle={
          "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        }
        type={"user"}
      />
      <Footer />
    </>
  );
}

export default User;
