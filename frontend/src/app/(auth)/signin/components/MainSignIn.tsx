import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import FormSignIn from "./FormSignIn";

export default function MainSignIn() {
  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-between bg-[url('/imgs/auth/auth-mobile-background.png')] bg-cover bg-center px-5 md:h-screen lg:bg-[url('/imgs/auth/signin/signin-background.png')]">
        <Header />
        <FormSignIn />
        <Footer />
      </div>
    </>
  );
}
