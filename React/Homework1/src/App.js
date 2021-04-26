import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import manti from "./assets/Manti_of_Kayseri.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = ["Kodluyoruz", "Emine"];
  const recipeItem = [
    {
      title: "Avokado Ezmeli Taco",
      date: "12 Ocak 2021, Salı",
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      title: "Kayseri Mantısı",
      date: "26 Nisan 2021, Pazartesi",
      image: manti,
      description:
        "Bir kaşığa 40 adet mantı sığmalı, harcı çiğden konulmalı. Üzerine bol yoğurtlu sos, mis gibi tereyağı gezdirmezsen de olmaz. Evet, konumuz emeğinin, maharetin ve sabrın yemeği Kayseri mantısı.",
    }];

  const likeCount = [193, 167];
  const isLiked = [false, true];

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor[0]}
          item={recipeItem[0]}
          count={likeCount[0]}
          isLiked={isLiked[0]}
        />
        <Card
          author={recipeAuthor[1]}
          item={recipeItem[1]}
          count={likeCount[1]}
          isLiked={isLiked[1]}
        />
      </header>
    </div>
  );
}

export default App;
