import React from "react";
import { Button, Container, createStyles, Text, Title } from "@mantine/core";
import { BucketHeader } from "../components/BucketHeader";

type Props = {};

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing.md,
    fontSize: 62,
  },
}));

export default function IndexPage({}: Props) {
  const { classes } = useStyles();
  return (
    <div>
      <BucketHeader />
      <Container>
        <Title className={classes.title}>Linwood Bucket</Title>
        <Text size="xl">Your static generated asset library software</Text>
      </Container>
    </div>
  );
}
