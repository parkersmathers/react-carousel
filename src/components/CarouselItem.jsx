const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-image" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p className="text-sm">{item.price}</p>
    </div>
  );
};

export default CarouselItem;
