import React from 'react';
import './ItemList.css';

const ItemList = ({ data, onSelect, children: renderLable }) => {
  return (
    <div className="card mb-3">
      <ul className="list-group list-group-flush">
        {data.map(({ id, ...data }) => {
          return (
            <li
              key={id}
              className="list-group-item"
              onClick={() => {
                onSelect(id);
              }}
            >
              {renderLable(data)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
