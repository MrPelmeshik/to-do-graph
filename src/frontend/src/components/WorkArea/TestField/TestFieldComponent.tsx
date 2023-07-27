import React, {useState} from "react";
import {Type} from "./type";
import testFieldStyle from './style.module.css';
import {Tabs} from "@consta/uikit/Tabs";
import {Text} from "@consta/uikit/Text";


type Item = {
    label: string;
    status: 'success' | 'error' | 'test';
    disabled?: boolean;
};
const items: Item[] = [
    {
        label: 'DnD',
        status: 'test',
        disabled: false,
    }
]
const getItemLabel = (item: Item) => item.label;
// const getItemDisabledStatus = (item: Item): boolean => item.disabled ?? false;

export const TestFieldComponent: React.FC<Type>
    = ({}) => {
    const [value, setValue] = useState<Item | null>(items[0]);
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    }}>
        <Text as={'b'}
              size={'xs'}
              view={'primary'}
        >
            Test field
        </Text>
        <Tabs
            value={value}
            onChange={({ value }) => setValue(value)}
            items={items}
            getItemLabel={getItemLabel}
            disabled
        />
    </div>
}