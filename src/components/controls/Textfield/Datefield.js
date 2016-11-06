import React, { Component, PropTypes } from 'react'
import l from 'utils/local'

const months = [
  l('January'),
  l('Febrary'),
  l('March'),
  l('April'),
  l('May'),
  l('June'),
  l('July'),
  l('August'),
  l('September'),
  l('October'),
  l('November'),
  l('December'),
]
const weekDays = [
  l('Mo'),
  l('Tu'),
  l('We'),
  l('Th'),
  l('Fr'),
  l('Sa'),
  l('Su')
]

/*
 * Calendar
 */

class Calendar extends Component {
  constructor(props) {
    super(props)
    const today = new Date()
    this.state = {
      mode: 'month',
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      decade: today.getFullYear() - 4
    }
  }

  handleMonthClick() {
    this.setState({ mode: 'year'})
  }
  handleYearClick() {
    this.setState({ mode: 'decade'})
  }
  handleMonthItemClick(month) {
    this.setState({ month, mode: 'month' })
  }
  handleYearItemClick(year) {
    this.setState({ year, mode: 'month' })
  }
  handleNextClick() {
    switch (this.state.mode) {
      case 'month':
        this.setState(prevState => {
        if (prevState.month === 11) {
          return { month: 0, year: prevState.year + 1 }
        }
          return { month: prevState.month + 1 }
        })
        break
      case 'year':
        this.setState(prevState => ({ year: prevState.year + 1}))
        break
      default:
        this.setState(prevState => ({ decade: prevState.decade + 9}))
    }
  }
  handlePrevClick() {
    switch (this.state.mode) {
      case 'month':
        this.setState(prevState => {
        if (prevState.month === 0) {
          return { month: 11, year: prevState.year - 1 }
        }
          return { month: prevState.month - 1 }
        })
        break
      case 'year':
        this.setState(prevState => ({ year: prevState.year - 1}))
        break
      default:
        this.setState(prevState => ({ decade: prevState.decade - 9}))
    }
  }

  renderYears() {
    return new Array(9).fill(1).map((item, index) =>
      <div
        key={index}
        className='textfield__calendarItem textfield__calendarItem--year'
        onClick={() => this.handleYearItemClick(this.state.decade + index)}
        onMouseDown={this.mouseDown}
      >{this.state.decade + index}</div>
    )
  }
  renderMonths() {
    return months.map((month, index) =>
      <div
        key={index}
        className='textfield__calendarItem textfield__calendarItem--month'
        onClick={() => this.handleMonthItemClick(index)}
        onMouseDown={this.mouseDown}
      >{month}</div>
    )
  }
  renderWeekDayNames() {
    return weekDays.map((day, index) =>
      <div key={index} className='textfield__calendarWeekDay'>{day}</div>
  )}

  renderWeek ({ children, key }) {
    return <div key={key} className='textfield__calendarWeek'>{children}</div>
  }
  renderDay (date, key, onClick, onMouseDown) {
    return <div
      key={key}
      className='textfield__calendarDay'
      onClick={() => onClick(date)}
      onMouseDown={() => onMouseDown()}
    />
  }

  renderDays(items) {
    const { year, month } = this.state
    let startDate = new Date(year, month, 1)
    let monthArray = [this.renderWeek({ children: this.renderWeekDayNames(), key: -1 })]
    for (let i = 0; i < 7; i++) {
      if (startDate.getMonth() === month) {
        let week = []
        for (let j = 0; j < 7; j++) {
          const day = startDate.getDay()
          if ((day - 1 === j || (day === 0 && j === 6)) && startDate.getMonth() === month) {
            const monthDay = startDate.getDate()
            week.push(this.renderDay(startDate, j, this.props.onSelect, this.props.onMouseDown))
            startDate = new Date(year, month, monthDay + 1)
          } else {
            week.push(<div key={j} className='textfield__calendarDay is-empty' />)
          }
        }
        monthArray.push(this.renderWeek({ children: week, key: i }))
      }
    }
    return monthArray
  }

 render() {
   const { month, year, mode } = this.state
   return (
     <div className='textfield__calendar' style={this.props.style}>
       <div className='textfield__calendarHeader'>
         <div
           className='textfield__calendarPrev'
           onClick={() => this.handlePrevClick()}
           onMouseDown={this.mouseDown}
         ><div className='textfield__calendarPrevSign' /></div>
         <div
           className='textfield__calendarMonthTitle'
           onClick={() => this.handleMonthClick()}
           onMouseDown={this.mouseDown}
         >
           {this.months[month]}
         </div>
         <div
           className='textfield__calendarYearTitle'
           onClick={() => this.handleYearClick()}
           onMouseDown={this.mouseDown}
         >
           {year}
         </div>
         <div
           className='textfield__calendarNext'
           onClick={() => this.handleNextClick()}
           onMouseDown={this.mouseDown}
         ><div className='textfield__calendarNextSign' /></div>
       </div>
       <div className='textfield__calendarBody'>
         {
           mode === 'decade' ? this.renderYears() :
           mode === 'year' ? this.renderMonths() :
           this.renderDays(this.props.items)
         }
       </div>
     </div>
   )
 }
}

Calendar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired
}



 /*
 * Datafield
 */

class Datefield extends Component {
  constructor(props) {
    super(props)
    this.state({
      isOpen: false,
    })
    this.selectItemFromMouse = this.selectItemFromMouse.bind(this)
  }

  componentWillMount () {
    this._ignoreBlur = false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== '') {
      this.setState({ isOpen: true })
    } else {
      this.setState({ isOpen: false })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.isOpen === true && prevState.isOpen === false)
      this.setMenuPositions()
  }

  handleKeyDown (event) {
    if (this.keyDownHandlers[event.key])
      this.keyDownHandlers[event.key].call(this, event)
    else {
      this.setState({
        isOpen: true
      })
    }
  }

  handleChange (event) {
    this.props.onChange(event, event.target.value)
  }

  keyDownHandlers = {
    Escape (event) {
      this.setState({
        isOpen: false
      })
    }
  }

  setMenuPositions () {
    var node = this.refs.input
    var rect = node.getBoundingClientRect()
    var computedStyle = global.window.getComputedStyle(node)
    var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
    var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
    var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
    this.setState({
      menuTop: rect.bottom + marginBottom,
      menuLeft: rect.left + marginLeft,
      menuWidth: rect.width + marginLeft + marginRight
    })
  }

  selectItemFromMouse (item) {
    var value = item.value
    this.setState({
      isOpen: false,
    }, () => {
      this.props.onSelect(value, item)
      this.refs.input.focus()
    })
  }

  setIgnoreBlur (ignore) {
    this._ignoreBlur = ignore
  }

  renderMenu () {
    return (
      <Calendar
        onMouseDown={() => this.setIgnoreBlur(true)}
        onSelect={this.selectItemFromMouse}
      />
    )
  }

  handleInputBlur () {
    if (this._ignoreBlur) return
    this.setState({ isOpen: false })
  }

  handleInputFocus () {
    if (this._ignoreBlur) {
      this.setIgnoreBlur(false)
      return
    }
    // We don't want `selectItemFromMouse` to trigger when
    // the user clicks into the input to focus it, so set this
    // flag to cancel out the logic in `handleInputClick`.
    // The event order is:  MouseDown -> Focus -> MouseUp -> Click
    this._ignoreClick = true
    this.setState({ isOpen: true })
  }

  isInputFocused () {
    var el = this.refs.input
    return el.ownerDocument && (el === el.ownerDocument.activeElement)
  }

  handleInputClick () {
    // Input will not be focused if it's disabled
    if (this.isInputFocused() && this.state.isOpen === false)
      this.setState({ isOpen: true })
    else if (this.state.highlightedIndex !== null && !this._ignoreClick)
      this.selectItemFromMouse(this.getFilteredItems()[this.state.highlightedIndex])
    this._ignoreClick = false
  }

  render () {
    return (
      <div style={{...this.props.wrapperStyle}}>
        <input
          {...this.props.inputProps}
          role="combobox"
          aria-autocomplete="list"
          autoComplete="off"
          ref="input"
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={(event) => this.handleChange(event)}
          onKeyDown={(event) => this.handleKeyDown(event)}
          onKeyUp={(event) => this.handleKeyUp(event)}
          onClick={this.handleInputClick}
          value={this.props.value}
        />
        {('open' in this.props ? this.props.open : this.state.isOpen) && this.renderMenu()}
      </div>
    )
  }
}

Datefield.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  wrapperStyle: PropTypes.object,
  onMenuVisibilityChange: PropTypes.func,
  open: PropTypes.bool,
}

export default Datefield
