import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mock } from './services/MockDate';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

// const server = setupServer(
//     rest.options(`https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token`, 
//     (req, res, ctx) => res(ctx.json(mock)))
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());


it('should be able to login and post', async () => {
    render(
        <UserProvider>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </UserProvider>
    );
    
    const loginLink = await screen.findByRole('link', { name: /go log in/i});
    userEvent.click(loginLink);

    await screen.findByText(/login/i);

    const emailInput = await screen.findByPlaceholderText('Email');
    userEvent.type(emailInput, 'hairy@richard.com');

    const pwordInput = await screen.findByPlaceholderText(/password/i);
    userEvent.type(pwordInput, '123456');

    const signUp = screen.getByRole('button', { name: 'Sign Up, Dummy!' });
    userEvent.click(signUp);

    await screen.findByText(/home/i);

    const gBookLink = await screen.findByRole('input')
    userEvent.click(gBookLink);

    const enterText = await screen.findByRole('textbox');
    userEvent.type(enterText, 'Cool Beans!');



    const subButton = screen.getByRole('button', { name: 'Add to the book, Yo!' });
    userEvent.click(subButton);

    const testEntry = await screen.findByText('Cool Beans!', { exact: false });
    expect(testEntry.textContent).toEqual('Cool Beans!');

    screen.debug();


})