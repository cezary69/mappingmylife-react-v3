import React, { Component } from 'react'
import { Map, Marker, TileLayer, Popup } from 'react-leaflet'
import L from 'leaflet'
import { MAPBOXURL } from '../constants/config'
import { geoIcon, phoneIcon } from './Icons'
import _ from 'lodash'
import reduce from 'lodash/fp'
import { Button } from 'react-bootstrap'
import 'leaflet-css'
import '../styles/map.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

class FavorisMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false,
      center: [48.866667, 2.333333]
    }
    this.showInfo = this.showInfo.bind(this)
    this.renderGeoMarkers = this.renderGeoMarkers.bind(this)
    this.renderPhoneMarkers = this.renderPhoneMarkers.bind(this)
  }
  showInfo () {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  renderGeoMarkers (geolocations) {
    let result = _.reduce(geolocations, function (result, value) {
      ((result[(value.latitude).toString() + ',' + (value.longitude).toString()]) || (result[(value.latitude).toString() + ',' + (value.longitude).toString()] = [])).push(
        {
          start: value.timestamp.replace(/T|Z/g, ' '),
          msisdn: value.msisdn,
          _id: value._id
        })
      return result
    }, [])
    let geoLog = []
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        let item = {}
        item.latitude = Number(key.split(',')[0])
        item.longitude = Number(key.split(',')[1])
        item.geoInfo = result[key]
        geoLog.push(item)
      }
    }
    if (geoLog.length > 0) {
      return geoLog.map((item, i) =>
        <Marker key={i} position={[item.latitude, item.longitude]} icon={geoIcon}>
          <Popup>
            <div>
              <h5>Nombre de geolocation = {item.geoInfo.length}</h5>
              <div style={{ display: this.state.showPopup ? 'block' : 'none' }}>
                {item.geoInfo.map((item, i) =>
                  <div key={i} className='geoPopup'>
                    <p >Timestamp: {item.start}</p>
                  </div>
              )}
              </div>
              <Button bsSize='small' bsStyle='success' onClick={this.showInfo}>{this.state.showPopup ? 'Cache' : 'Afficher'}</Button>
            </div>
          </Popup>
        </Marker>
    )
    } else {
      return <p>error</p>
    }
  }
  renderPhoneMarkers (phonecalls) {
    let result = _.reduce(phonecalls, function (result, value) {
      ((result[(value.latitude).toString() + ',' + (value.longitude).toString()]) || (result[(value.latitude).toString() + ',' + (value.longitude).toString()] = [])).push(
        {
          start: value.timestamp.replace(/T|Z/g, ' '),
          msisdn: value.msisdn,
          partner: value.partner,
          typeMessage: value.type,
          _id: value._id
        })
      return result
    }, [])
    let phoneLog = []
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        let item = {}
        item.latitude = Number(key.split(',')[0])
        item.longitude = Number(key.split(',')[1])
        item.phoneInfo = result[key]
        phoneLog.push(item)
      }
    }
    if (phoneLog.length > 0) {
      return phoneLog.map((item, i) =>
        <Marker key={i} position={[item.latitude, item.longitude]} icon={phoneIcon}>
          <Popup>
            <div>
              <h5>Nombre de communications = {item.phoneInfo.length}</h5>
              <div style={{ display: this.state.showPopup ? 'block' : 'none' }}>
                {item.phoneInfo.map((item, i) =>
                  <div key={i} className='phonePopup'>
                      <p>Timestamp: {item.start}</p>
                      <p>Numéro de contact: {item.partner}</p>
                      <p>Type d'appel: {item.typeMessage}</p>
                  </div>
              )}
              </div>
              <Button bsSize='small' bsStyle='success' onClick={this.showInfo}>{this.state.showPopup ? 'Cache' : 'Afficher'}</Button>
            </div>
          </Popup>
        </Marker>
    )
    } else {
      return <p>error</p>
    }
  }

  render () {
    const {geolocations, phonecalls} = this.props
    const geomarkers = this.renderGeoMarkers(geolocations)
    const phonemarkers = this.renderPhoneMarkers(phonecalls)

    return (
      <div>
        <Map center={this.state.center} zoom={13} maxZoom={18}>
          <TileLayer
            url={MAPBOXURL}
            maxZoom={18}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {geomarkers}
          {phonemarkers}
        </Map>

      </div>
    )
  }
}

export default FavorisMap