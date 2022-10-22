import { productListings } from './api/products';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';

function App() {
  return (
    <main>
      <Carousel>
        {productListings.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </Carousel>
    </main>
  );
}

export default App;
