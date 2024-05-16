'use client'

import { HeaderMegaMenu } from "@/components/HeaderMegaMenu/HeaderMegaMenu";
import NewClaimCard from "@/components/NewClaimCard/NewClaimCard";
import NewClaimForm from "@/components/NewClaimForm/NewClaimForm";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { StatsRingCard } from "@/components/StatusRingCard/StatusRingCard";
import { Container, SimpleGrid, Title, useMantineTheme } from "@mantine/core";

export default function Subgrid() {
    const theme = useMantineTheme();
    return (<div>    
      <HeaderMegaMenu />
      <Container size="xl">
        <PageTitle title="New Claim" />
        <NewClaimForm />
      </Container>
    </div>
    );
  }