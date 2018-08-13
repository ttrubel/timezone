import get from "./get";

export default class YandexGeocoder {
    async cityToCoord(city) {
        const { response } = await get(`https://geocode-maps.yandex.ru/1.x/?geocode=${encodeURIComponent(city)}&format=json&results=1`)
        const { GeoObjectCollection } = response
        const { metaDataProperty } = GeoObjectCollection
        const { GeocoderResponseMetaData } = metaDataProperty
        const found = parseInt(GeocoderResponseMetaData.found)

        if (found) {
            const { featureMember } = GeoObjectCollection
            const item = featureMember[0]
            const { GeoObject } = item
            const { Point } = GeoObject
            const { pos } = Point

            const result = pos.split(' ')

            const latitude = result[0]
            const longitude = result[1]

            return {
                latitude,
                longitude
            }
        }
    }
}