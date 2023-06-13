///<reference types="jest"/>

import * as React from 'react';
import {RenderResult, act, render} from '@testing-library/react';
import SpfxWebpartTest from '../spfxWebpartTest/components/SpfxWebpartTest'
import Hello from '../spfxWebpartTest/components/Hello'
import { assert } from 'chai';

describe("<Hello>", ()=>{
    test("should render SpfxWebpartTest Component",()=>{
        render(<Hello/>)
    });
    test("Should be contain Hello in content",()=>{
        const {getByText}=render(<Hello/>);
        const text=getByText("Hello I am a child")
        expect(text).toBeDefined()
    })  
})

describe("<SpfxWebpartTest>", ()=>{
    test("should render description",()=>{
        let helloworldComponent:RenderResult;
        act(()=>{
            helloworldComponent=render(<SpfxWebpartTest description= "Rest Description" />)
        })
        let descriptionParagraph=helloworldComponent.getByTestId("hello-world-description-paragraph");
        assert.equal(descriptionParagraph.textContent,"Test description")
        
    })
})