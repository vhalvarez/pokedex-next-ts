import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemon } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPages = () => {
    const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title="Pokemons - Favoritos">
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritePokemon favoritePokemons={favoritePokemons} />
            )}
        </Layout>
    );
};

export default FavoritesPages;
