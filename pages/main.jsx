import React, { useState } from "react";
import { Text } from "react-native";
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
          <Text>Chart</Text>
        </CenterContainer>
      </FancyContainer>
      <GeneralContainer>
        <CenterContainer>
          <Text>Search bar</Text>
        </CenterContainer>
      </GeneralContainer>
      <GeneralContainer>
        <CenterContainer>
          <OverviewTable />
        </CenterContainer>
      </GeneralContainer>
    </>
  );
};
