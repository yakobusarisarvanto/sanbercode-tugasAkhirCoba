import Page from "./page.js"
import { Key } from 'webdriverio'

class PelangganPage extends Page{
    get pelangganTab () { return $('//div[text()="pelanggan"]') }
    get addButton () { return $('//a[@class="chakra-button css-1piskbq"]') }
    get namaInput () { return $('//input[@id="nama"]') }
    get noHpInput () { return $('//input[@id="no.hp"]') }
    get alamatInput () { return $('//input[@id="alamat"]') }
    get keteranganInput () { return $('//input[@id="keterangan"]') }
    get saveBtn () { return $('//button[normalize-space()="simpan"]') }
    get alert () { return $('//div[@role="alert"]') }
    get customerAdded () { return $(`//td[normalize-space()="${this.user}"]//parent::tr[@role="row"]`) }
    get epsilisBtn () { return $(`//td[normalize-space()="${this.user}"]//following-sibling::*//button[@aria-haspopup="menu"]`) }
    get submenu() { return $('//div[@data-popper-placement="bottom-end"]') }
    get ubahButton() { return $(`//td[normalize-space()="${this.user}"]//following-sibling::*//child::a[@tabindex="0"]`) }
    get hapusBtn() { return $(`//td[normalize-space()="${this.user}"]/following-sibling::*//button[@role="menuitem"]`) }
    get alertDialog() { return $('//section[@role="alertdialog"]') }
    get deleteButton() { return $('//button[text()="Delete"]') }

    setPelanggan = (user) => {
        this.user = user
    }

    addPelanggan = async (nama, noHp, alamat, keterangan) => {
        await this.namaInput.addValue(nama)
        await this.noHpInput.addValue(noHp)
        await this.alamatInput.addValue(alamat)
        await this.keteranganInput.addValue(keterangan)
    }

    submit = async () => {
        return await this.saveBtn.click()
    }

    updPelanggan = async (nama, noHp, alamat, keterangan) => {
        await this.namaInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);
        await this.noHpInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);
        await this.alamatInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);
        await this.keteranganInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);

        await this.namaInput.addValue(nama)
        await this.noHpInput.addValue(noHp)
        await this.alamatInput.addValue(alamat)
        await this.keteranganInput.addValue(keterangan)
    }
}

export default new PelangganPage();