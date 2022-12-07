
import Head from 'next/head'

import NavigationBar from '../components/navigations/navigationBar'
import Footer from '../components/navigations/footer'
import Link from 'next/link';

export default function Home({pokemons}){
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Home
        </h1>

        <div>
          <ul>
            {pokemons.results.map((pokemon, i) => (
              <li key={i}>
                <Link href={`pokemons/${pokemon.name}`}>
                {pokemon.name}
                </Link></li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await res.json();

  //   console.log(pokemons);

  return {
    props: {
      pokemons,
    },
  };
}
