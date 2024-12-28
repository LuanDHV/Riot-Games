import Header from "../../shared/Header";

import Footer from "../../shared/Footer";
import FormRegister from "./FormRegister";

export default function Main() {
  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-between bg-[url('/imgs/auth/auth-mobile-background.png')] bg-cover bg-center px-5 md:h-screen lg:bg-[url('/imgs/auth/register/register-background.png')]">
        <Header />
        <FormRegister />
        <Footer />
      </div>
    </>
  );
}
