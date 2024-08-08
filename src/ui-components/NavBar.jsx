/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1114px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <View
        width="1114px"
        height="68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,253,253,1)"
        {...getOverrideProps(overrides, "NavBar386625")}
      ></View>
      <View
        width="99px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17px"
        left="979px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(10,190,255,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,251,251,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="995px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log out"
        {...getOverrideProps(overrides, "Log out")}
      ></Text>
      <View
        width="122px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16px"
        left="826px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23px"
        left="58px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Notes"
        {...getOverrideProps(overrides, "Notes")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="836px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="create note"
        {...getOverrideProps(overrides, "create note")}
      ></Text>
    </View>
  );
}
