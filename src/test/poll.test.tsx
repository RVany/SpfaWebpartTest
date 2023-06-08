///<reference types="jest"/>

import * as React from 'react';
import {render} from '@testing-libraty/react';
import SpfxWebpartTest from '../webparts/spfxWebpartTest/components/SpfxWebpartTest'

describe("SpfxWebpartTest", ()=>{
    test("should render SpfxWebpartTest Component",()=>{
        render(<SpfxWebpartTest/>)
    });

    test("Should be contain Hello in content",()=>{
        const {getByText}=render(<SpfxWebpartTest/>);
        const text=getByText("Welcome")
        expect(text).toBeDefined()
    })

})