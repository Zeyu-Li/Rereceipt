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
import { Manual } from "./manual";

export const Main = ({ navigation }) => {
  // amount of money
  const [total, setTotal] = useState(100);
  const [manualPage, setManualPage] = useState(false);

  if (manualPage) {
    return <Manual />;
  }
  return (
    <View style={{ flex: 1 }}>
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

      <PlusButton setManualPage={setManualPage} />

      {/* <ButtonWithStyle>
        <Text style={{fontSize:60, textAlign: 'center', fontWeight: 'bold', color:'white'}}>+</Text>
      </ButtonWithStyle>  */}
    </View>
  );
};
