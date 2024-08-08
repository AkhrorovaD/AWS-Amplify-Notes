/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteNote } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function NoteUI(props) {
  const { note, myIcon3856135, overrides, ...rest } = props;
  const myIconThreeEightFiveSixOneThreeFiveOnClick = async () => {
    await client.graphql({
      query: deleteNote.replaceAll("__typename", ""),
      variables: {
        input: {
          id: note?.id,
        },
      },
    });
  };
  return (
    <View
      width="299px"
      height="340px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteUI")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="600"
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
        top="15px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={note?.title}
        {...getOverrideProps(overrides, "T-Shirt")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
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
        top="53px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={note?.text}
        {...getOverrideProps(overrides, "text")}
      ></Text>
      <View
        width="31px"
        height="26px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="12px"
        left="267px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        onClick={() => {
          myIconThreeEightFiveSixOneThreeFiveOnClick();
        }}
        {...getOverrideProps(overrides, "MyIcon3856135")}
      >
        <Icon
          width="18.08px"
          height="19.5px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.083332061767578,
            height: 19.5,
          }}
          paths={[
            {
              d: "M14.2083 6.5L14.2083 17.3333L3.875 17.3333L3.875 6.5L14.2083 6.5ZM12.2708 0L5.8125 0L4.52083 1.08333L0 1.08333L0 3.25L18.0833 3.25L18.0833 1.08333L13.5625 1.08333L12.2708 0ZM16.7917 4.33333L1.29167 4.33333L1.29167 17.3333C1.29167 18.525 2.45417 19.5 3.875 19.5L14.2083 19.5C15.6292 19.5 16.7917 18.525 16.7917 17.3333L16.7917 4.33333Z",
              fill: "rgba(92,102,112,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector3856136")}
        ></Icon>
      </View>
      <View
        width="20px"
        height="21px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="15px"
        left="240px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon3856137")}
      >
        <Icon
          width="15px"
          height="19.25px"
          viewBox={{ minX: 0, minY: 0, width: 15, height: 19.25 }}
          paths={[
            {
              d: "M13.3333 1.75L9.85 1.75C9.5 0.735 8.58333 0 7.5 0C6.41667 0 5.5 0.735 5.15 1.75L1.66667 1.75C0.75 1.75 0 2.5375 0 3.5L0 17.5C0 18.4625 0.75 19.25 1.66667 19.25L13.3333 19.25C14.25 19.25 15 18.4625 15 17.5L15 3.5C15 2.5375 14.25 1.75 13.3333 1.75ZM7.5 1.75C7.95833 1.75 8.33333 2.14375 8.33333 2.625C8.33333 3.10625 7.95833 3.5 7.5 3.5C7.04167 3.5 6.66667 3.10625 6.66667 2.625C6.66667 2.14375 7.04167 1.75 7.5 1.75ZM13.3333 17.5L1.66667 17.5L1.66667 3.5L3.33333 3.5L3.33333 6.125L11.6667 6.125L11.6667 3.5L13.3333 3.5L13.3333 17.5Z",
              fill: "rgba(92,102,112,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.17%"
          bottom="4.17%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector3856138")}
        ></Icon>
      </View>
    </View>
  );
}
