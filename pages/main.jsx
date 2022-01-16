import React, { useState } from "react";
import { Text, View } from "react-native";
import { Chart } from "../components/chart";
import { ButtonWithStyle, PlusButton } from "../components/common/button";
import { OverviewTable } from "../components/common/Table";
import {
  CenterContainer,
  FancyContainer,
  GeneralContainer,
} from "../components/containers/GeneralContainer";
import styles from "../styles/styles";

export const Main = () => {
  // amount of money
  const [total, setTotal] = useState(100);

  return (
    <>
      <FancyContainer>
        <CenterContainer>
          {/* Chart */}
          <Chart />
          <View>
            <Text style={[styles.dataCell, { display: "inline" }]}>
              Total: ${total.toFixed(2)}
            </Text>
          </View>
        </CenterContainer>
      </FancyContainer>
      <GeneralContainer>
        <Text style={[styles.dataCell]}>Search bar</Text>
      </GeneralContainer>
      <GeneralContainer>
        <CenterContainer>
          <OverviewTable />
        </CenterContainer>
      </GeneralContainer>

      {/* extra space for plus button */}
      <View style={{ height: 20 }} />

      <PlusButton />

      {/* <ButtonWithStyle>
        <Text style={{fontSize:60, textAlign: 'center', fontWeight: 'bold', color:'white'}}>+</Text>
      </ButtonWithStyle>  */}
    </>
  );
};
