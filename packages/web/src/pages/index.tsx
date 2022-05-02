import React from "react";
import { Button } from "@mantine/core";
import { BucketHeader } from "../components/BucketHeader";

type Props = {};

export default function IndexPage({}: Props) {
  return (
    <div>
      <BucketHeader />
      IndexPage
      <Button>Hi</Button>
    </div>
  );
}
