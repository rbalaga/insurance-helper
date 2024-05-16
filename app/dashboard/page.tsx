'use client'

import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import UsersTable from './users/page';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (<>
    <HeaderMegaMenu />
    <Container size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <UsersTable />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  </>
  );
}

import { Stack, useMantineTheme, px } from '@mantine/core';

const getUsers = (height: number) => <div>
    <UsersTable />
</div>

const getChild = (height: number) => <div>
    <Skeleton height={height} radius="md" animate={false} />
</div>
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function Subgrid() {
  const theme = useMantineTheme();
  return (<div>    
    <HeaderMegaMenu />
    <Container size="xl">
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        {getUsers(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  </div>
  );
}