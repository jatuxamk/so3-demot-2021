import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Sovelluksessa on otsikko Hello world', () => {
  render(<App />);
  const linkElement = screen.getByText("Hello world");
  expect(linkElement).toBeInTheDocument();
});

test('Tervehdysilmoitus tulee näkyviin nappia painamalla.', () => {
  render(<App />);

  const nappi = screen.getByTestId("nappi")

  fireEvent.click(nappi);

  const ilmoitus = screen.getByTestId("ilmoitus");

  expect(ilmoitus).toBeTruthy();

});

test('Tervehdys toimii annetulla nimellä', () => {
  
  render(<App />);

  const nimi = screen.getByTestId("nimi");
  const nappi = screen.getByTestId("nappi");

  const testinimi = "Jussi";

  fireEvent.change(nimi, { target : {value : testinimi} });
  fireEvent.click(nappi);

  const ilmoitus = screen.getByTestId("ilmoitus");

  expect(ilmoitus.innerHTML).toContain(testinimi);

});

for (let i = 0; i<=23; i++) {

  test(`Sovellus toimii kaikkina vuorokauden tunteina (tunti : ${i})`, () => {
    
    render(<App tunti={i}/>);

    const nimi = screen.getByTestId("nimi");
    const nappi = screen.getByTestId("nappi");

    const testinimi = "Jussi";

    fireEvent.change(nimi, { target : {value : testinimi} });
    fireEvent.click(nappi);

    const ilmoitus = screen.getByTestId("ilmoitus");

    expect(ilmoitus.innerHTML).toContain(testinimi);

  });

}