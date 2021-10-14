import React from "react";
import { useParams, Link } from "react-router";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    const {id} = useParams();

    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);

    const getCocktail = async () => {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
    }

    React.useEffect(() => {
        getCocktail();
    }, [])

    return (
        <main>
            <section>
                <h3 className="section-title">{id}</h3>
            </section>
        </main>
    )
}

export default SingleCocktail