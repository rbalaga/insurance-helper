'use client'

import { HeaderMegaMenu } from "@/components/HeaderMegaMenu/HeaderMegaMenu";
import NewClaimCard from "@/components/NewClaimCard/NewClaimCard";
import { StatsRingCard } from "@/components/StatusRingCard/StatusRingCard";
import { Container, SimpleGrid, useMantineTheme } from "@mantine/core";

export default function Subgrid() {
    const theme = useMantineTheme();
    return (<div>    
      <HeaderMegaMenu />
      <Container size="xl">
        <SimpleGrid cols={{ base: 3, xs: 3 }}>
            {
                [1,2,3,4,5].map(n => <StatsRingCard key={n} />)
            }
            <NewClaimCard />
          {/* {getUsers(BASE_HEIGHT)}
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
          </Stack>
          <Stack>
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          </Stack>
          {getChild(BASE_HEIGHT)} */}
        </SimpleGrid>
      </Container>
    </div>
    );
  }