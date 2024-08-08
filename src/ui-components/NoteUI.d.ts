/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUIOverridesProps = {
    NoteUI?: PrimitiveOverrideProps<ViewProps>;
    "T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    text?: PrimitiveOverrideProps<TextProps>;
    MyIcon3856135?: PrimitiveOverrideProps<ViewProps>;
    Vector3856136?: PrimitiveOverrideProps<IconProps>;
    MyIcon3856137?: PrimitiveOverrideProps<ViewProps>;
    Vector3856138?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NoteUIProps = React.PropsWithChildren<Partial<ViewProps> & {
    note?: any;
    myIcon3856135?: React.ReactNode;
} & {
    overrides?: NoteUIOverridesProps | undefined | null;
}>;
export default function NoteUI(props: NoteUIProps): React.ReactElement;
