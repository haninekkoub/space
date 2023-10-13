import Form from "@/components/form";
import Layout from "@/components/layout";
import TabsDemo from "@/components/tabs";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2000);

  return (
    <Layout>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Form setDay={setDay} setMonth={setMonth} setYear={setYear} />

        <TabsDemo day={day} month={month} year={year} />
      </div>
    </Layout>
  );
}
