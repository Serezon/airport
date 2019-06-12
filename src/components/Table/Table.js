import React from "react";

const departureConfig = [
  "term",
  "timeDepShedule",
  "airportToID.city_en",
  "status",
  "airline",
  "codeShareData",
  "gateNo"
];

const ArrivalConfig = [
  "term",
  "timeArrShedule",
  "airportFromID.city_en",
  "status",
  "airline",
  "codeShareData"
];
// Виносити функції - хороша практика, тут все гуд. До речі, else тут лишній, оскільки якщо перший if спрацює, до другого return вона ніколи не добереться :)
const getConfig = (status, departureConfig, ArrivalConfig) => {
  if (status === "departure") {
    return departureConfig;
  } else {
    return ArrivalConfig;
  }
};

const Table = ({ data, status }) => {
  const config = getConfig(status, departureConfig, ArrivalConfig);

  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Terminal</th>
          <th>Time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
          {config.includes("gateNo") ? <th>Gate</th> : null}
        </tr>
      </thead>
      <tbody className="tbody">
        {data.map(item => {
          return (
            <tr key={item.ID}>
              {config.map((header, i) => {
                /* Не сильно добре використовувати індекси як ключі, оскільки вони змінні, і можуть виникати баги при зміні props'ів. В ідеалі це має бути якийсь унікальний ідентифікатор а-ля id'шка */
                if (header === "airline" && item[header]) {
                  return <td key={i}>{item[header].en.name}</td>;
                }
                if (header === "codeShareData") {
                  return <td key={i}>{item[header][0].codeShare}</td>;
                }
                if (header === "timeDepShedule" && item[header]) {
                  return <td key={i}>{item[header].match("[0-9:]{5}")[0]}</td>;
                }
                if (header === "timeArrShedule" && item[header]) {
                  return <td key={i}>{item[header].match("[0-9:]{5}")[0]}</td>;
                }
                return <td key={i}>{item[header]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
