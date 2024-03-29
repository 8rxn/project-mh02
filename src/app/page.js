import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-between px-24">
        <p className="text-white">Hey</p>
      </div>
      <Footer />
    </>
  );
}
