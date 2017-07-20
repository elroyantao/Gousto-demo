import React from 'react'

import testComponentHelper from '../../../../lib/test-helper'
import Accordion from '../Accordion'

describe('<Accordion />', () => {
  const initialProps = {
    header: 'this is a header'
  }
  const renderComponent = testComponentHelper(Accordion)

  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('with child node', () => {
      expect(renderComponent({
        ...initialProps,
        children: <div>this is a body</div>
      }).getTree())
        .toMatchSnapshot()
    })
    it('when extended height is set and is expanded', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialProps,
        children: <div>this is a body</div>
      })
      wrapper.setState({
        expanded: true,
        expandedHeight: 100
      })
      expect(getTree()).toMatchSnapshot()
    })
    it('when extended height is set and is not expanded', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialProps,
        children: <div>this is a body</div>
      })
      wrapper.setState({
        expanded: false,
        expandedHeight: 100
      })
      expect(getTree()).toMatchSnapshot()
    })
  })
  describe('@lifecycle', () => {
    describe('componentDidMount', () => {
      let initialScrollHeight
      let renderedComponent
      beforeEach(() => {
        renderedComponent = renderComponent({
          ...initialProps
        })
        initialScrollHeight = renderedComponent.instance.state.expandedHeight
      })

      it('do nothing if scrollHeight is undefined', () => {
        const { instance, wrapper } = renderedComponent
        wrapper.find('.Accordion-wrapper').node.ref({ scrollHeight: undefined })
        expect(instance.state.expandedHeight).toBe(initialScrollHeight)
        instance.componentDidMount()
        expect(instance.state.expandedHeight).toBe(initialScrollHeight)
      })

      it('do nothing if scrollHeight is remains same', () => {
        const { instance, wrapper } = renderedComponent
        wrapper.find('.Accordion-wrapper').node.ref({ scrollHeight: initialScrollHeight })
        expect(instance.state.expandedHeight).toBe(initialScrollHeight)
        instance.componentDidMount()
        expect(instance.state.expandedHeight).toBe(initialScrollHeight)
      })

      it('update expandedHeight if changed', () => {
        const { instance, wrapper } = renderedComponent
        expect(instance.state.expandedHeight).toBe(initialScrollHeight)
        wrapper.find('.Accordion-wrapper').node.ref({ scrollHeight: 50 })
        instance.componentDidMount()
        expect(instance.state.expandedHeight).toBe(50)
      })
    })
  })

  describe('@events', () => {
    describe('onClick header', () => {
      it('should toggle the state.expanded', () => {
        const { wrapper, instance } = renderComponent(initialProps)
        const initialExpanded = instance.state.expanded
        wrapper.find('.Accordion-header').simulate('click')
        expect(instance.state.expanded).toBe(!initialExpanded)
      })
    })
  })
})
