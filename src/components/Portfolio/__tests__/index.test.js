import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '..';

// To isolate the unit test as much as possible, a mock prop of currentCategory has been created
const portrait = { name: 'portraits', description: 'Portraits of people in my life' };

afterEach(cleanup);

describe('Portfolio is rendering', () => {

    it('renders', () => {
        render(<Portfolio currentCategory={portrait} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Portfolio currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Portfolio currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })
})