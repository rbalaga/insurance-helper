import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import Link from 'next/link';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          BlueGuard AI
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Get your insurance claim approved with the help of specially trained AI bot suggestions and industry experts.        
        . To get started <Link href={'/signup'}><Anchor component='button' underline='never'>Register</Anchor></Link> your acconut now to talk to our AI bot / expert team.
      </Text>
    </>
  );
}
