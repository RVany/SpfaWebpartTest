///<reference types="jest"/>

import * as React from 'react';
import {render} from '@testing-library/react';
//import SpfxWebpartTest from '../webparts/spfxWebpartTest/components/SpfxWebpartTest'
import Hello from '../spfxWebpartTest/components/Hello'

describe("SpfxWebpartTest", ()=>{
    test("should render SpfxWebpartTest Component",()=>{
        render(<Hello/>)
    });
    test("Should be contain Hello in content",()=>{
        const {getByText}=render(<Hello/>);
        const text=getByText("Hello I am a child")
        expect(text).toBeDefined()
    })    

})