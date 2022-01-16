import React, { useState } from "react";
import { Text } from "react-native";
import { Chart } from "../components/chart";
import { OverviewTable } from "../components/common/Table";
import {
  CenterContainer,
  FancyContainer,
  GeneralContainer,
} from "../components/containers/GeneralContainer";

export const Main = () => {
  return (
    <>
      <FancyContainer>
        <CenterContainer>
          {/* Chart */}
          <Chart />
          <Text>Total: $100.00</Text>
        </CenterContainer>
      </FancyContainer>
      <GeneralContainer>
        <Text>Search bar</Text>
      </GeneralContainer>
      <GeneralContainer>
        <CenterContainer>
          <OverviewTable />
        </CenterContainer>
      </GeneralContainer>
    </>
  );
};
