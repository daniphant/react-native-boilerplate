import React from "react";
import { StatusBar } from "expo-status-bar";

import Welcome from "~/modules/Welcome";

export default function App() {
  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
      <Welcome />
    </>
  );
}
