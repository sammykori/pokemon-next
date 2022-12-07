import Head from "next/head";
import NavigationBar from "../components/navigations/navigationBar";
import Footer from "../components/navigations/footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Favorites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Favorites</h1>
      </main>
      <Footer />
    </div>
  );
}
