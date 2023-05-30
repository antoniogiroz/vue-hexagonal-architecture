import { describe, expect, test } from 'vitest';
import { render, screen } from '~/unit';
import HelloWorld from '@/core/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('should render correctly with props', async () => {
    const props = {
      msg: 'Hello, World!',
    };

    render(HelloWorld, {
      props,
    });

    const heading = await screen.findByRole('heading', { name: props.msg });

    expect(heading).toBeInTheDocument();
  });
});
