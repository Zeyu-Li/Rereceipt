import React, { useEffect, useState } from "react";
import { DataTable, Text } from "react-native-paper";
import styles from "../../styles/styles";

export const OverviewTable = () => {
  const [data, setData] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const date = new Date();
    setData([
      ["item 1", date, 10.0],
      ["item 2", date, 20.01],
    ]);
  }, []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text style={styles.dataHeader}>Name</Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={styles.dataHeader}>Date</Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={styles.dataHeader}>Cost</Text>
        </DataTable.Title>
      </DataTable.Header>

      {data.map((item, index) => {
        return (
          <DataTable.Row key={item[0] + index}>
            <DataTable.Cell>
              <Text style={styles.dataCell}>{item[0]}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={styles.dataCell}>{`${
                months[item[1].getMonth()]
              } ${item[1].getDay()}`}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={styles.dataCell}>${item[2].toFixed(2)}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};
