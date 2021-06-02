import {render} from '@testing-library/react';
import Home from "../home";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";


describe('testing home component', () => {
    it('checks if dropdown component has values from json file as options', () =>{
        const {getByRole} = render(<Home/>);
        
        const select = getByRole('combobox', {name: /sku/i});

        expect(select).toBeInTheDocument();
        
        userEvent.selectOptions(select, ["LTV719449/39/39"]);
        
        expect(select).toHaveValue('LTV719449/39/39')
    });

})
