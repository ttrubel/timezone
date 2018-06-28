import get from "./get";

export default class GoogleMapsTimezone {
    constructor(key) {
        this.key = key
    }

    async coordToTimezone(coord) {
        const timestamp = Math.round(+new Date()/1000);
        const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${coord.longitude},${coord.latitude}&timestamp=${timestamp}&key=${this.key}`
        const response = await get(url)

        if (response.status === 'OK') {
            return response.timeZoneId
        }
    }
}