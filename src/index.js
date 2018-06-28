import YandexGeocoder from './YandexGeocoder'
import GoogleMapsTimezone from './GoogleMapsTimezone'

export default class {
    constructor(apiKey) {
        this.geocoder = new YandexGeocoder()
        this.timezone = new GoogleMapsTimezone(apiKey)
    }

    /**
     * Returns timezone by city name.
     * @param {string} city - City.
     */
    async timezoneByCity(city) {
        const coord = await this.geocoder.cityToCoord(city)

        if (coord) {
            return await this.timezone.coordToTimezone(coord)
        } else {
            throw new Error('Not found')
        }
    }
}