function ItemListContainer({ text }) {
  return (
    <div className="flex items-center justify-center py-10">
      <h2 className="text-center text-2xl font-semibold">
        {text}
      </h2>
    </div>
  );
}

export default ItemListContainer;