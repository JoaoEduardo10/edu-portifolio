import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import { Hearding } from '.';
import { provaiderRender } from '../../themes/provaiderTest';

describe('<Hearding />', () => {
	it('should render the hearding', () => {
		provaiderRender(<Hearding text='testando' />);

		const hearding = screen.getByRole('heading', { name: 'testando' });

		expect(hearding).toHaveTextContent('testando');
	});

	it('should Match Snapshot', () => {
		const { container } = provaiderRender(<Hearding text='testando' />);

		expect(container.firstChild).toMatchInlineSnapshot(`
			.c0 {
			  text-align: center;
			  font-size: 4rem;
			  margin-bottom: 2.5rem;
			  color: #fff;
			}

			<h2
			  class="c0"
			>
			  testando
			</h2>
		`);
	});
});