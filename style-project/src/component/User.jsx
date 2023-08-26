const User = ({ item, deleteFunction }) => {
  return (
    <div key={item.id} className="component-style">
      {item.age} - {item.name}
      <button onClick={() => deleteFunction(item.id)}>x</button>
    </div>
  );
};

export default User;
