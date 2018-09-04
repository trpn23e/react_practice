import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

import {
  updateMemo
} from './../../action/boardAction'

class Note extends Component {
    constructor(props){
      super(props)
      this.state = {
        editing: false
      }
      this.edit = this.edit.bind(this)
      this.remove = this.remove.bind(this)
      this.save = this.save.bind(this)
      this.renderForm = this.renderForm.bind(this)
      this.renderDisplay = this.renderDisplay.bind(this)
      this.randomBetween = this.randomBetween.bind(this)
    }

    componentWillMount(){
      this.style = {
        right: this.randomBetween(0, window.innerWidth - 150, 'px'),
        top: this.randomBetween(0, window.innerHeight - 150, 'px'),
        transform: "rotate(${this.randomBetween(-25, 25, 'deg')})"
      }
    }

    randomBetween(x, y, s){
      return x + Math.ceil(Math.random() * (y-x)) + s
    }

    componentDidUpdate(){
      let textArea
      if(this.state.editing){
        textArea = this._newText
        textArea.focus()
        textArea.select()
      }
    }

    shouldComponentUpdate(nextProps, nextState){
      return (
        this.props.children !== nextProps.children || this.state !== nextState
      )
    }

    edit(){
      this.setState({
        editing: true
      })
    }
    remove(){
      this.props.onRemove(this.props.index)
    }
    save(e){
      e.preventDefault()
      this.props.onChange(this._newText.value, this.props.index)
      this.setState({
        editing: false
      })

      console.log('11111111111 : ' + JSON.stringify(this.props))
      let param = {
        memoKey: this.props.key,
        seq: this.props.index,
        note: this._newText.value,
        xPos: Math.ceil(Math.random(),1),
        yPos: Math.ceil(Math.random(),1)
      }
      updateMemo(param).then(response => {
        console.log('note updated : ' + JSON.stringify(response.data))
      }).catch(err => {
        alert(err)
      })
    }
    renderForm(){
      return (
        <div className="note" style={this.style}>
          <form onSubmit={this.save}>
            <textarea ref={input => this._newText = input}
                      defaultValue={this.props.children}/>
            <button id="save"><FaFloppyO /></button>
          </form>
        </div>
      )
    }
    renderDisplay() {
      return (
        <div className="note" style={this.style}>
          <p>{this.props.children}</p>
          <span>
            <button onClick={this.edit} id="edit"><FaPencil /></button>
            <button onClick={this.remove} id="remove"><FaTrash /></button>
          </span>
        </div>
      )
    }

    render() {
      return this.state.editing ? this.renderForm() : this.renderDisplay()      
    }
}

export default Note