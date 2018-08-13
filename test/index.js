import { Timezone } from '../'
import dotenv from 'dotenv'
dotenv.config()

describe("Timezone", function () {
    it("Moscow", async () => {
        const timezone = new Timezone(process.env.API_KEY)

        const result = await timezone.timezoneByCity("Moscow")

        if (result !== 'Europe/Moscow') {
            throw new Error()
        }
    })

    it("Atyrau", async () => {
        const timezone = new Timezone(process.env.API_KEY)

        const result = await timezone.timezoneByCity("**-*/^%^#%^")

        if (result !== 'Asia/Oral') {
            throw new Error()
        }
    })
});
