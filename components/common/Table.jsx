import React, { useEffect, useState } from "react";
import { Button, DataTable, Text } from "react-native-paper";
import styles from "../../styles/styles";

export const OverviewTable = () => {
  const [sortedData, setSortedData] = useState([
    ["item 3", new Date(new Date().getDate() + 1), 20.01],
    ["item 1", new Date(), 10.0],
    ["item 2", new Date(), 20.01],
    ["1item 2", new Date(), 20.01],
  ]);
  const [data, setData] = useState([]);
  const [ascending, setAscending] = useState(true);
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
    // get data here?
    // sort by date here
    setData(
      sortedData.sort((a, b) => {
        return a[1] - b[1] ?? ("" + a[0].attr).localeCompare(b[0].attr);
      })
    );
  }, []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text style={styles.dataHeader}>Name</Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={styles.dataHeader}>Date</Text>
          {/* <Button
            icon={ascending ? "arrow-up-bold" : "arrow-down-bold"}
            color="white"
            onPress={() => setAscending(!ascending)}
            style={{ padding: 0, height: "48px", margin: 0 }}
          >
            <Text style={[styles.dataHeader, { padding: 0, margin: 0 }]}>
              Date
            </Text>
          </Button> */}
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={styles.dataHeader}>Cost</Text>
        </DataTable.Title>
      </DataTable.Header>

      {data.map((item, index) => {
        return (
          <DataTable.Row key={item[0] + index} style={{ borderBottomWidth: 0 }}>
            <DataTable.Cell>
              <Text style={styles.dataCell}>{item[0]}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={styles.dataCell}>{`${
                months[item[1].getMonth()]
              } ${item[1].getDate()}`}</Text>
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
