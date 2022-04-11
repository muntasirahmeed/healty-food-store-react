
import MainHeader from "../MainHeader/MainHeader";
import useFoods from "../../hooks/useFoods";
import Food from "../Food/Food";

const Home = () => {
  const [foods, setFoods] = useFoods();
  return (
    <div>
      <MainHeader></MainHeader>
      <div className='py-10 mx-0 md:mx-10 bg-[#FAFAFC]'>
        <h1 className='text-2xl mb-10 md:text-3xl text-center font-semibold text-[#799F23] '>SOME OF OUR FOODS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 max-w-[1440px]  mx-auto">
          {foods.slice(0, 3).map(food => <Food key={food.idMeal} food={food}></Food>)}
        </div>
        </div>
   </div>
  );
};

export default Home;
