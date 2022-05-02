import { Container, Title } from "@mantine/core";
import React from "react";
import { BucketHeader } from "../components/BucketHeader";

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <>
      <BucketHeader />
      <Container>
        <Title order={1}>404</Title>
        <Title order={2}>Page not found</Title>
      </Container>
    </>
  );
}
