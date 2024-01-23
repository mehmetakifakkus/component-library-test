import { ConfigProvider } from "antd";
import DatePickerTrials from "./components/DatePickerTrials";
import MultipleSelectTrials from "./components/MultipleSelectTrials";
import RichTextTrials from "./components/RichTextTrials";
import TreeTrials from "./components/TreeTrials";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-12 p-12 items-start">
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#04637C",
            colorBorder: "border-yellow-500",
            borderRadius: 8,

            // Alias Token
            colorBgContainer: "#ffffff",
          },
          components: {
            Button: {
              colorPrimary: "#04637C",
              algorithm: true, // Enable algorithm
            },
            Input: {
              colorPrimary: "#04637C",
              colorBorder: "border-yellow-500",
              hoverBorderColor: "#04637C",
              algorithm: true, // Enable algorithm
              // TextArea: {
              //   colorPrimary: "#04637C",
              //   algorithm: true, // Enable algorithm
              // },
            },
            DatePicker: {
              colorPrimary: "#04637C",
              colorBorder: "var(--color-primary)",
              hoverBorderColor: "#04637C",
              borderRadius: 8,
              algorithm: true, // Enable algorithm
            },
            Select: {
              colorPrimary: "#04637C",
              colorBorder: "#04637C",
              algorithm: true, // Enable algorithm
              multipleItemBg: "#EBEBEB",
              multipleItemBorderColor: "#00000037",
              borderRadius: 8,
            },
          },
        }}
      >
        <DatePickerTrials />
        <RichTextTrials />
        <MultipleSelectTrials />
        <TreeTrials />
      </ConfigProvider>
    </main>
  );
}
