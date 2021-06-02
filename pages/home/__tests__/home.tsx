import {render, waitFor, screen} from '@testing-library/react';
import Home from "../home";
import userEvent from '@testing-library/user-event';
import {getStock} from "../../../functions/get-data"
import "@testing-library/jest-dom/extend-expect";


const stockSpy = jest.fn();

describe('testing home component', () => {
    it('checks if dropdown component has values from json file as options', () =>{
        const {getByRole} = render(<Home/>);
        
        const select = getByRole('combobox', {name: /sku/i});

        expect(select).toBeInTheDocument();
        
        userEvent.selectOptions(select, ["LTV719449/39/39"]);
        
        expect(select).toHaveValue('LTV719449/39/39')
    });
    it('select value and find sku total', async () =>{
        const {getByRole} = render(<Home/>);
        
        const select = getByRole('combobox', {name: /sku/i});
        
        userEvent.selectOptions(select, ["LTV719449/39/39"]);
        
        expect(select).toHaveValue('LTV719449/39/39');

        await waitFor(() => {
            expect(screen.queryByText(/remaining stock:/i)).toBeInTheDocument();
        })
    });
    it('shows error message if no SKU in both stocks and transactions when choosing blank value', async () =>{
        const {getByRole} = render(<Home/>);
        
        const select = getByRole('combobox', {name: /sku/i});
        
        userEvent.selectOptions(select, [""]);
                
        await waitFor(() => {
            expect(screen.queryByText(/no sku found/i)).toBeInTheDocument();
        })
    });
})

