import { useRouter } from "next/router";

export default function Pokemons() {
  const router = useRouter();
  const { pokemon } = router.query;

  return <div>Pokemon: {pokemon}</div>;
}
