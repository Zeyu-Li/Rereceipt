import React, { useState } from "react";
import { Text } from "react-native";
import { OverviewTable } from "../components/common/Table";
import {
  CenterContainer,
  GeneralContainer,
} from "../components/containers/GeneralContainer";

export const Main = () => {
  return (
    <>
      <GeneralContainer>
        <CenterContainer>
          <Text>Main 301</Text>
        </CenterContainer>
      </GeneralContainer>
      <OverviewTable />
    </>
  );
};
