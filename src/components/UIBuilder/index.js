import React, { Component } from 'react';
import Card from '../Card';
import DragAndDropBoard from '../DragAndDropBoard';
import axios from 'axios';
import './styles.css';

const URL = 'https://bsunter.lib.id/Botiful@dev/api/business/'

class UIBuilder extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      phone: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleClick(selected) {
    const name = this.state.name
    const address = this.state.Address
    const phone = this.state.phone

    let consumer = []
    let owner = []

    for (let i = 0; i < selected.length; i++) {
      let item = selected[i]
      if (item.type === 'consumer') {
        consumer.push(item)
      } else {
        owner.push(item)
      }
    }

    const body = {
      businessInfo: {
        businessName: name,
        address: address,
        phone: phone,
        ownerName: 'Brian Sunter',
        businessType: 'Barber',
      },
      consumerServices: consumer,
      ownerServices: owner
    }
    console.log('yo')
    this.props.showReview()
    axios.post(URL, body)

  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value})
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value})
  }

  render() {
    return (
      <div className="UIBuilder">
        <div className="ui-form">
          <form>
            <div className="topForm">
              <div className="uiInputs">
                <label>
                  Name Of Busines:
                </label>
                <input className="ui-input" type="text" name="name" placeholder="Name..." onChange={ this.handleNameChange }/>
              </div>
              <div className="uiInputs">
                <label>
                  Address:
                </label>
                <input className="ui-input" type="text" name="address" placeholder="Address.." onChange={ this.handleAddressChange }/>
              </div>
              <div className="uiInputs">
                <label>
                  Phone:
                </label>
                <input className="ui-input" type="text" name="phone" placeholder="925-XXX-XXXX" onChange={ this.handlePhoneChange }/>
              </div>
            </div>
          </form>
        </div>
        <DragAndDropBoard items={this.state.items} selected={this.state.selected} action={this.handleClick}/>
      </div>
    )
  }
}

export default UIBuilder;
