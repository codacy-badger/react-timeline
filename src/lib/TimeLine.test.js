import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'; 
import ShallowRenderer from 'react-test-renderer/shallow';
import TimeLine from './TimeLine'
import renderer from 'react-test-renderer'
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';



describe('TimeLine Component Suite ', function () {
    it('TimeLine Render Properly',()=>{
        const div= document.createElement('div');
        ReactDOM.render(<TimeLine />,div)
      
    })

    // test('Test Initinialization',()=>{
    //     let component =ReactTestUtils.renderIntoDocument(<TimeLine style={{width:500,height:500}} />);
        
    //     expect(component.dragging).toBe(false)
    //     expect(component.draggingPosition).toBe(0)
    //     expect(component.refs.dataViewPort.clientHeight).toBe(2)
    //     expect(component.numVisibleDays).toBe(2)
    //     //const component = renderer.create(<TimeLine />);
    //     //timeLineTree = component.toJSON();
    // })

    // test('Shallow Render',()=>{
    //     const renderer = new ShallowRenderer();
    //     renderer.render(<TimeLine />);
    //     const result = renderer.getRenderOutput();
    //     console.log(result)
    // })
    // test('Tree Render',()=>{
    //     const testRenderer = TestRenderer.create(
    //         <TimeLine />
    //       );
          
    //       console.log(testRenderer.toJSON());
    // })
    test('Enzyme Renderiung',()=>{
        const wrapper = mount(<TimeLine />);
        console.log('TimeLine')
        
        console.log(wrapper.find('timeLine').length)

    })

})