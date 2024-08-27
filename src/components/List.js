import React from "react";



const List = ({ filterData }) => {
  return (
    <>
      {filterData.map(({ name, email, age, image }, index) => (
        <article className="person" key={index}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
