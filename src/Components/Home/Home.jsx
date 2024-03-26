// import Cards from "../Bookcards/Cards";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import Card from "../Bookcards/Card";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <Hero></Hero>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-12"> 
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
            </div>
</div> 
        
    );
};

export default Home;