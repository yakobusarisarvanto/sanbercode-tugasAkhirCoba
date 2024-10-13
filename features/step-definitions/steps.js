import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import KategoriPage from '../pageobjects/kategori.page.js';
import PenggunaPage from '../pageobjects/pengguna.page.js';
import PelangganPage from '../pageobjects/pelanggan.page.js';
import pelangganPage from '../pageobjects/pelanggan.page.js';

Given(/^I open the Kasir Aja website$/, async () => {
    await LoginPage.open()
})

// Login step definition
When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('emailtoko@gmail.com', 'passwordtoko')
    await LoginPage.submit()
})

Then(/^I should see the Dashboard Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard')
})

When(/^I attempt to login with "([^"]*)" and "([^"]*)"$/, async (email, password) => {
    await LoginPage.login(email, password)
    await LoginPage.submit()
})

Then(/^I should see an error message "(.*)"$/, async (message) => {
    await expect(LoginPage.errorMessage).toHaveText(message);
});
//=================================================================================\\

// Kategori step definition
When(/^I click on the Kategori Tab$/, async () => {
    await KategoriPage.kategoriTab.click()
})

Then(/^I should see the Kategori Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
})

When(/^I click the Tambah button$/, async () => {
    await KategoriPage.addButton.click()
})

Then(/^I shoul see the Kategori Create Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories/create')
})

When(/^I input a "([^"]*)" and "([^"]*)" for the new Kategori$/, async (name, description) => {
    await KategoriPage.addKategori(name, description)
})

When(/^I Click Save Button$/, async () => {
    await KategoriPage.submit()
})

Then(/^I should see the new "([^"]*)" kategori in the list$/, async (name) => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
    await expect(KategoriPage.alert).toBeDisplayed()
    await browser.refresh()
    await KategoriPage.setKategori(name)
    await expect(KategoriPage.kategoryAdded).toBeDisplayed()
})

When(/^I click option Espisilis button on kategori ([^"]*)$/, async (old_name) => {
    await KategoriPage.setKategori(old_name)
    await KategoriPage.epsilisBtn.click()
})

Then(/^I should see submenu$/, async () => {
    await expect(KategoriPage.submenu).toBeDisplayed()
}) 

When(/^I clik ubah button on kategori ([^"]*)$/, async (old_name) => {
    await KategoriPage.setKategori(old_name)
    await KategoriPage.ubahButton.click()
})

Then(/^I should See Update Kategori Page$/, async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/edit'))
})

When(/^I input a new "([^"]*)" and "([^"]*)"$/, async (new_name, new_description) => {
    await KategoriPage.updKategori(new_name, new_description)
})

Then(/^I should see the update (.*) kategori in the list$/, async (new_name) => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
    await expect(KategoriPage.alert).toBeDisplayed()
    await browser.refresh()
    await KategoriPage.setKategori(new_name)
    await expect(KategoriPage.kategoryAdded).toBeDisplayed()
})

Then(/^I should see an error message kategori "(.*)"$/, async (message) => {
    await expect(KategoriPage.alert).toHaveText(message);
});


When(/^I Click hapus button on kategori (.*)$/, async (delete_name) => {
    await KategoriPage.setKategori(delete_name)
    await KategoriPage.hapusBtn.click()
})

Then(/^I should See Pop Up verification$/, async () => {
    await expect(KategoriPage.alertDialog).toBeDisplayed()
})
When(/^I click Delete Button$/, async () => {
    await expect(KategoriPage.deleteButton).toBeClickable()
    await KategoriPage.deleteButton.click()
})

Then(/^I should see the (.*) kategori was deleted$/, async (delete_name) => {
    await expect(KategoriPage.alert).toBeDisplayed()
    await KategoriPage.setKategori(delete_name)
    await expect(KategoriPage.kategoryAdded).not.toBePresent()
})
//=================================================================================\\

// Pengguna Step definition
When(/^I click on the Pengguna Tab$/, async () => {
    await PenggunaPage.penggunaTab.click()
})

Then(/^I should see the Pengguna Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users')
})

Then(/^I shoul see the Pengguna Create Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users/create')
})

When(/^I input a "([^"]*)", "([^"]*)" and "([^"]*)" for the new User$/, async (name, email, password) => {
    await PenggunaPage.addPengguna(name, email, password)
})

Then(/^I should see the new "([^"]*)" user in the list$/, async (name) => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users')
    await expect(PenggunaPage.alert).toBeDisplayed()
    await browser.refresh()
    await PenggunaPage.setPengguna(name)
    await expect(PenggunaPage.userAdded).toBeDisplayed()
})

Then(/^I should see an error message pengguna "(.*)"$/, async (message) => {
    await expect(PenggunaPage.alert).toHaveText(message);
});

When(/^I click option Espisilis button on user ([^"]*)$/, async (old_user) => {
    await PenggunaPage.setPengguna(old_user)
    await PenggunaPage.epsilisBtn.click()
})

When(/^I clik ubah button on user ([^"]*)$/, async (old_user) => {
    await PenggunaPage.setPengguna(old_user)
    await PenggunaPage.ubahButton.click()
})

Then (/^I should See Update User Page$/, async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/edit'))
})

When (/^I input a new "([^"]*)", "([^"]*)" and "([^"]*)"$/, async (new_name, new_email, new_password) => {
    await PenggunaPage.updPengguna(new_name, new_email, new_password)
})

Then(/^I should see the update ([^"]*) user in the list$/, async (new_name) => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users')
    await expect(PenggunaPage.alert).toBeDisplayed()
    await browser.refresh()
    await PenggunaPage.setPengguna(new_name)
    await expect(PenggunaPage.userAdded).toBeDisplayed()
})

When(/^I Click hapus button on user ([^"]*)$/, async (delete_name) => {
    await PenggunaPage.setPengguna(delete_name)
    await PenggunaPage.hapusBtn.click()
})

Then(/^I should see the ([^"]*) user was deleted$/, async (delete_name) => {
    await expect(PenggunaPage.alert).toBeDisplayed()
    await PenggunaPage.setPengguna(delete_name)
    await expect(PenggunaPage.userAdded).not.toBePresent()
})
//=================================================================================\\

// Pelanggan Step definition
When(/^I click on the Pelanggan Tab$/, async () => {
    await PelangganPage.pelangganTab.click()
})

Then(/^I should see the Pelanggan Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/customers')
})

Then(/^I shoul see the Pelanggan Create Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/customers/create')
})


When(/^I input a "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)" for the new Customer$/, async (name, noHp, alamat, keterangan) => {
	await PelangganPage.addPelanggan(name, noHp, alamat, keterangan)
});


Then(/^I should see the new "([^"]*)" pelanggan in the list$/, async (name) => {
	await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/customers')
    await expect(PelangganPage.alert).toBeDisplayed()
    await browser.refresh()
    await PelangganPage.setPelanggan(name)
    await expect(PelangganPage.customerAdded).toBeDisplayed()
});

Then(/^I should see an error message pelanggan "([^"]*)"$/, async (message) => {
	await expect(PelangganPage.alert).toHaveText(message);
});

When(/^I click option Espisilis button on customer ([^"]*)$/, async (old_user) => {
    await PelangganPage.setPelanggan(old_user)
    await PelangganPage.epsilisBtn.click()
})

When(/^I clik ubah button on pelanggan ([^"]*)$/, async (old_user) => {
    await PelangganPage.setPelanggan(old_user)
    await PelangganPage.ubahButton.click()
})

Then(/^I should See Update Customer Page$/, async () => {
	await expect(browser).toHaveUrl(expect.stringContaining('/edit'))
});


When(/^I input a new "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, async (name, noHp, alamat, keterangan) => {
	await PelangganPage.updPelanggan(name, noHp, alamat, keterangan)
});

Then(/^I should see the update ([^"]*) pelanggan in the list$/, async (new_name) => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/customers')
    await expect(PelangganPage.alert).toBeDisplayed()
    await browser.refresh()
    await PelangganPage.setPelanggan(new_name)
    await expect(pelangganPage.customerAdded).toBeDisplayed()
})

When(/^I Click hapus button on customer ([^"]*)$/, async (delete_name) => {
    await PelangganPage.setPelanggan(delete_name)
    await PelangganPage.hapusBtn.click()
})

Then(/^I should see the ([^"]*) customer was deleted$/, async (delete_name) => {
    await expect(PelangganPage.alert).toBeDisplayed()
    await PelangganPage.setPelanggan(delete_name)
    await expect(PelangganPage.customerAdded).not.toBePresent()
})