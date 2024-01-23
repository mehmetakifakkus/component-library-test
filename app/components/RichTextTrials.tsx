"use client";

import React, { useState } from "react";
import { Input } from "antd";

type Props = {};

const { TextArea } = Input;

export default function RichTextTrials({}: Props) {
  return (
    <div className="flex gap-4 flex-col">
      <span className="text-2xl">RichText Trials</span>
      <div>
        <span className="text-sm mb-1">TextArea</span>
        <TextArea rows={4} />
      </div>
    </div>
  );
}
