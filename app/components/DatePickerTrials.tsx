"use client";

import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

type Props = {};

export default function DatePickerTrials({}: Props) {
  return (
    <div className="flex gap-4 flex-col">
      <span className="text-2xl">DatePicker Trials</span>
      <div className="flex flex-col">
        <span className="text-sm mb-1">DatePicker (day)</span>
        <DatePicker onChange={onChange} />
        <span className="text-sm mb-1 mt-4">DatePicker (week)</span>
        <DatePicker onChange={onChange} picker="week" />
        <span className="text-sm mb-1 mt-4">DatePicker (month)</span>
        <DatePicker onChange={onChange} picker="month" />
      </div>
    </div>
  );
}
