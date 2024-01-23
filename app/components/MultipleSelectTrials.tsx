"use client";

import React, { useState } from "react";

// Import Select
import { Select, Space } from "antd";
import type { SelectProps } from "antd";

// import TreeSelect
import { TreeSelect } from "antd";

type Props = {};

const treeData = [
  {
    value: "Akif's Store",
    title: "Akif's Store",
    children: [
      {
        value: "Clothing",
        title: "Clothing",
        children: [
          {
            value: "Men's Clothing",
            title: "Men's Clothing",
          },
          {
            value: "Women's Clothing",
            title: "Women's Clothing",
          },
          {
            value: "Kid's Clothing",
            title: "Kid's Clothing",
          },
        ],
      },
      {
        value: "Electronics",
        title: "Electronics",
        children: [
          {
            value: "Mobiles",
            title: "Mobiles",
          },
          {
            value: "Laptops",
            title: "Laptops",
          },
          {
            value: "Tablets",
            title: "Tablets",
          },
          {
            value: "Accessories",
            title: "Accessories",
          },
        ],
      },
    ],
  },
];

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

export default function MultipleSelectTrials({}: Props) {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex gap-4 flex-col w-[320px]">
      <span className="text-2xl">MultipleSelect Trials</span>

      <div className="flex flex-col">
        <span className="text-sm mb-1">Search Text</span>
        <Select
          mode="multiple"
          allowClear
          // style={{ width: "100%" }}
          className="w-full"
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          options={options}
        />

        <span className="text-sm mt-4 mb-1">Search Text (Tree Structure)</span>
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Please select"
          allowClear
          multiple
          treeDefaultExpandAll
          onChange={onChange}
          treeData={treeData}
        />
      </div>
    </div>
  );
}
