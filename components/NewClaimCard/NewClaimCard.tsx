import {
  ActionIcon,
  Card,
  Center,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Text,
  UnstyledButton,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './NewClaimCard.module.css';

const PRIMARY_COL_HEIGHT = rem(216);

export default function NewClaimCard() {
  const theme = useMantineTheme();
  return (
    <Card withBorder padding="lg">
      <Center className={classes.newclaim}>
        <RingProgress
          sections={[{ value: 100, color: 'var(--mantine-color-dark-6)' }]}
          label={
            <Center>
              <ActionIcon color="blue" variant="light" radius="xl" size="xl">
                <IconPlus style={{ width: rem(22), height: rem(22) }} />
              </ActionIcon>
            </Center>
          }
        />
      </Center>
    </Card>
  );
}
