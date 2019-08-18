import React from "react";

const AsList = ({ data, onSelect, children: renderLable }) => {
  return (
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
  );
};

const AsCardColumns = ({ data, onSelect, children: renderLable }) => {
  return (
    <div className="card-columns">
      {data.map(({ id, ...data }) => {
        return (
          <div
            key={id}
            className="card mb-3"
            onClick={() => {
              onSelect(id);
            }}
          >
            <img
              src={data.imageUrl}
              style={{
                width: "100%",
                backgroundImage: `url(${data.stabImageUrl})`
              }}
              alt={data.name}
            />
            <div className="card-body">{renderLable(data)}</div>
          </div>
        );
      })}
    </div>
  );
};

export { AsList, AsCardColumns };
