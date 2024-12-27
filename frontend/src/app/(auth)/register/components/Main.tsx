import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import Form from "./Form";

export default function Main() {
  return (
    <>
      <div className="h-screen w-full bg-[url('/imgs/auth/auth-mobile-background.png')] bg-cover bg-center px-5 lg:bg-[url('/imgs/auth/register/register-background.png')]">
        <Header />

        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full flex-col justify-end lg:w-1/2">
            <h2 className="mb-7 text-center text-4xl font-extrabold uppercase text-white lg:text-6xl xl:text-8xl">
              Create An Account
            </h2>
          </div>
          <div className="flex w-full justify-center lg:w-1/2">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
