import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import { ButtoDownload } from '.';
import { provaiderRender } from '../../themes/provaiderTest';

describe('<ButtoDownload />', () => {
	it('should render the buttonDownload', () => {
		provaiderRender(<ButtoDownload link='http//amigo' text='testando' />);

		const buttonDownload = screen.getByRole('button', { name: 'testando' });

		expect(buttonDownload).toBeInTheDocument();

	});

	it('should click a buttonDownload', () => {
		const { container } = provaiderRender(<ButtoDownload link='http//amigo' text='testando' />);

		expect(container.firstChild).toMatchInlineSnapshot(`
			.c0 {
			  padding: 1rem 2.5rem;
			  border: none;
			  font-size: 2rem;
			  background-image: linear-gradient(to left,#A115E4,#8257E6);
			  border-radius: 2rem;
			  margin-top: 1rem;
			}

			.c0 a {
			  color: #fff;
			}

			.c0:hover {
			  -webkit-transform: scale(1.1);
			  -ms-transform: scale(1.1);
			  transform: scale(1.1);
			}

			@media (max-width:950px) {
			  .c0:hover {
			    -webkit-transform: scale(1);
			    -ms-transform: scale(1);
			    transform: scale(1);
			  }
			}

			<button
			  class="c0"
			>
			  <a
			    download=""
			    href="http//amigo"
			    role="link"
			  >
			    testando
			  </a>
			</button>
		`);
	});
});