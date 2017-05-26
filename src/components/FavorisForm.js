/* global cozy */
import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { FAVORISPOINT_DOCTYPE } from '../constants/config'
import '../styles/rowContent.css'

class FavorisForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorisType: '',
      showCustomerInput: false,
      customerType: '',
      errorMessage: '',
      successMessage: ''
    }
  }

  handleChange (e) {
    if (e.target.value === 'others') {
      this.setState({ showCustomerInput: true })
    } else {
      this.setState({ showCustomerInput: false })
    }
    this.setState({ favorisType: e.target.value })
  }

  handleCustomerType (e) {
    this.setState({ customerType: e.target.value })
  }

  checkIfFieldValid (lat, lng, type, customerType) {
    return !((lat === '' || lng === '' || type === '' || (type === 'others' && customerType === '')))
  }

  addFavoris () {
    let isFieldValid = this.checkIfFieldValid(this.props.point.latitude, this.props.point.longitude, this.state.favorisType, this.state.customerType)
    let key = this.props.point.latitude.toString() + this.props.point.longitude.toString()
    if (!isFieldValid) {
      this.setState({ errorMessage: 'invalid champs' })
      this.setState({ successMessage: '' })
    } else if (this.props.favorisPoint[key] !== undefined || this.props.favorisPoint[key]) {
      this.setState({ errorMessage: 'Ce point est déjà un point favoris' })
      this.setState({ successMessage: '' })
    } else {
      this.setState({ errorMessage: '' })
      let favorisPoint = {}
      favorisPoint.latitude = this.props.point.latitude
      favorisPoint.longitude = this.props.point.longitude
      favorisPoint.category = (this.state.favorisType === 'others' ? this.state.customerType : this.state.favorisType)
      cozy.client.data.create(FAVORISPOINT_DOCTYPE, favorisPoint)
      .then(function (result) {
        let pointKey = result.latitude.toString() + result.longitude.toString()
        this.props.actions.addFavorisMap(pointKey, result.category, result._id)
        this.setState({ successMessage: 'OK' })
      }.bind(this))
      .catch(function (error) {
        this.setState({ errorMessage: 'Internal Error'})
      }.bind(this))
    }
  }

  modifyFavoris () {
    let isFieldValid = this.checkIfFieldValid(this.props.point.latitude, this.props.point.longitude, this.state.favorisType, this.state.customerType)
    let key = this.props.point.latitude.toString() + this.props.point.longitude.toString()
    if (!isFieldValid) {
      this.setState({ errorMessage: 'invalid champs' })
      this.setState({ successMessage: '' })
    } else if (this.props.favorisPoint[key] === undefined || !this.props.favorisPoint[key]) {
      this.setState({ errorMessage: 'Veuillez d\'abord ajouter ce point, puis le modifier' })
      this.setState({ successMessage: '' })
    } else {
      let modifyId = this.props.favorisPoint[key]['id']
      let modifyField = {category: this.state.favorisType === 'others' ? this.state.customerType : this.state.favorisType}
      cozy.client.data.updateAttributes(FAVORISPOINT_DOCTYPE, modifyId, modifyField)
      .then(function (result) {
        let pointKey = result.latitude.toString() + result.longitude.toString()
        this.props.actions.updateFavorisMap(pointKey, result.category, modifyId)
        this.setState({ errorMessage: '' })
        this.setState({ successMessage: 'OK' })
      }.bind(this))
    }
  }
  deleteFavoris () {
    let key = this.props.point.latitude.toString() + this.props.point.longitude.toString()
    if (this.props.point.latitude === '' || this.props.point.longitude === '') {
      this.setState({ errorMessage: 'invalid champs' })
      this.setState({ successMessage: '' })
    } else if (this.props.favorisPoint[key] === undefined || !this.props.favorisPoint[key]) {
      this.setState({ errorMessage: 'Le point que vous avez sélectionné n\'est pas votre lieu préféré' })
      this.setState({ successMessage: '' })
    } else {
      let deleteId = this.props.favorisPoint[key]['id']
      cozy.client.data.find(FAVORISPOINT_DOCTYPE, deleteId)
      .then(function (result) {
        cozy.client.data.delete(FAVORISPOINT_DOCTYPE, result)
        .then(function (result) {
          this.props.actions.deleteFavorisMap(key)
          this.setState({ errorMessage: '' })
          this.setState({ successMessage: 'OK' })
        }.bind(this))
      }.bind(this))
    }
  }
  render () {
    const { point } = this.props
    return (
      <div>
        <div className='rowContent'>
          <p style={{ display: (this.state.errorMessage.length === 0) ? 'none' : 'block', color: 'red' }}>{this.state.errorMessage}</p>
        </div>
        <div className='rowContent'>
          <p style={{ display: (this.state.successMessage.length === 0) ? 'none' : 'block', color: 'green' }}>{this.state.successMessage}</p>
        </div>
        <div className='rowContent'>
          <Form inline>
            <FormGroup controlId='formInlineLat'>
              <ControlLabel>Latitude:</ControlLabel>{' '}
              <FormControl type='text' placeholder='Latitude' value={point.latitude} readOnly />
            </FormGroup>

            <FormGroup controlId='formInlineLng'>
              <ControlLabel>Longtitude:</ControlLabel>{' '}
              <FormControl type='text' placeholder='Longtitude' value={point.longitude} readOnly />
            </FormGroup>

            <FormGroup controlId='formControlsType'>
              <ControlLabel>Choisir le type:</ControlLabel>{' '}
              <FormControl componentClass='select' placeholder='select' onChange={this.handleChange.bind(this)}>
                <option value='' />
                <option value='maison'>Maison</option>
                <option value='travail'>Travail</option>
                <option value='sport'>Sport</option>
                <option value='marche'>Marché</option>
                <option value='others'>Autres</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId='formInlineType'>
              <FormControl style={{ display: this.state.showCustomerInput ? 'block' : 'none' }} placeholder='Customer favoris type' type='text' value={this.state.customerType} onChange={this.handleCustomerType.bind(this)} />
            </FormGroup>
          </Form>
        </div>
        <div className='rowContent'>
          <Button type='button' bsSize='small' bsStyle='success' onClick={this.addFavoris.bind(this)}><i className='fa fa-plus' aria-hidden='true' /> Ajouter</Button>
          <Button type='button' bsSize='small' bsStyle='primary' onClick={this.modifyFavoris.bind(this)}><i className='fa fa-pencil' aria-hidden='true' /> Modifier</Button>
          <Button type='button' bsSize='small' bsStyle='danger' onClick={this.deleteFavoris.bind(this)}><i className='fa fa-trash' aria-hidden='true' /> Supprimer</Button>
        </div>
      </div>
    )
  }
}
export default FavorisForm