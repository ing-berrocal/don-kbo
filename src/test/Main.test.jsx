/**
 * @jest-environment jsdom
 */

import { renderer, act } from 'react-test-renderer';
import { render, screen, waitFor, getByText,findAllBy } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Main } from '../components/Principal/MainContainer';

it('Pantalla Inicial', async () => {

  jest.mock("../helper/googlemap/ImageMap", () => ({
    getImageAndLink: [(e)=>'http://elemento/a', (u)=>'http://elemento/b']
  }));

  render(<Main />);
  
  
  /*await waitFor(() =>{ 
    
    expect(screen.findAllByRole('heading', {  name: /ubicacion: /i})).toBeInTheDocument();
  },{
    timeout:2000
  })*/
  const elementos = await screen.findAllByRole('heading', {  name: /ubicacion: /i});
  screen.debug();
  expect(elementos.length).toBeGreaterThanOrEqual(4)
  //await expect(screen.findAllByText(/Ubicacion/)).toBeInTheDocument();
  
  //screen.logTestingPlaygroundURL()
  
  
 
  /*
  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 
  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  */
});