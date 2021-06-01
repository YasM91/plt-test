import React from 'react'
import {render} from '@testing-library/react';
import Dropdown from "../dropdown";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";





describe('SKU dropdown component', () => {
    it('checks if dropdown component has values from json file as options', () =>{
        const {getByRole} = render(<Dropdown setState={jest.fn()}/>);
        const select = getByRole('combobox', {name: /sku/i});
        userEvent.selectOptions(select, ["LTV719449/39/39"]);
        
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue('LTV719449/39/39')
    });
    it("can select option and ")

})
