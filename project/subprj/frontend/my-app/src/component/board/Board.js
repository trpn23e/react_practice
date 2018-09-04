import React, { Component } from 'react'

import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'
import {Router,Route,withRouter} from 'react-router';
// import './../../resources/css/board.css'

class Board extends Component {  
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }
    this.eachNote = this.eachNote.bind(this)
    this.add = this.add.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.nextId = this.nextId.bind(this)
    
    // DTI.js에서 this.props.history의 state로 파라미터를 넘기면 이렇게 옴
    console.log('board state (param) : ' + JSON.stringify(this.props.location.state))
  }

  componentDidMount() {
    var self = this
    // if(this.props.count) {
    //   fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
    //     .then(response => response.json())
    //     .then(json => json[0]
    //                         .split('. ')
    //                         .forEach(sentence => self.add(sentence.substring(0, 25))))
    // }
  }

  add(text){
    console.log('add text : ' + text)
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          key: this.nextId(),
          id: this.nextId(),
          note: text
        }
      ]
    }))
    console.log('add notes : ' + JSON.stringify(this.state.notes))
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  update(newText, i){
    // console.log("updating item at index", i, newText)
    console.log('updating item at index :::: ' + i + ' txt : ' + newText)
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !==i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id){
    console.log("remove item at", id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote(note, i){
    console.log('eachnote note : ' + JSON.stringify(note))
    console.log('eachnote idx : ' + i)
    return (
      <Note key={note.id}
            index={note.id}
            onChange={this.update}
            onRemove={this.remove}>
            {note.note}
            </Note>
    )
  }

  render() {
     return (
        <div className="board">
          {this.state.notes.map(this.eachNote)}
          <button onClick={this.add.bind(null, "새 메모")}
                  id="add">
                  <FaPlus />
          </button>
        </div>
     )
  }
}

export default withRouter(Board)