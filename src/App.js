import Card from './Components/Card'
import Header from './Components/Header'
import Drawer from './Components/Drawer'

const arr = [
   {
      title: 'Man sneakers Nike Blazer MId Suede',
      price: 589,
      imageUrl: '/img/sneakers/1.jpg'
   },
   {
      title: 'Man Sneakers Nike Air Max 270',
      price: 709,
      imageUrl: '/img/sneakers/2.jpg'
   },
   {
      title: 'Man Sneakers For Gigachads (only)',
      price: 389,
      imageUrl: '/img/sneakers/3.jpg'
   },
   {
      title: 'Man Sneakers Puma X Aka Boku No Piko',
      price: 399,
      imageUrl: '/img/sneakers/4.jpg'
   },

];

function App() {
   return (
      <div className="wrapper clear">
         <Drawer />
         <Header />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>All sneakers</h1>
               <div className="search-block d-flex">
                  <img src="/img/search.svg" alt="Search" />
                  <input placeholder="Search..." />
               </div>
            </div>
            <div className="d-flex">
               {arr.map((obj) => (
                  <Card 
                     title={obj.title}
                     price={obj.price} 
                     imageUrl={obj.imageUrl} 
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
