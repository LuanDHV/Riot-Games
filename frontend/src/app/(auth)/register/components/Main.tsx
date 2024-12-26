import Footer from "../../shared/Footer";
import Header from "../../shared/Header";

export default function Main() {
  return (
    <>
      <div className="h-screen w-full bg-[url('/imgs/auth/register/register-background.png')] bg-cover bg-center px-5">
        <Header />
        <h2 className="mb-7 text-center text-4xl font-extrabold uppercase text-white">
          Create An Account
        </h2>
        <Footer />
      </div>
    </>
  );
}
