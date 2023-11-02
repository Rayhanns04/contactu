# ContactU

**Aplikasi Manajemen Kontak Sederhana**

ContactU adalah aplikasi web berbasis React Vite yang dirancang untuk mengelola kontak. Aplikasi ini memanfaatkan sumber data dari API publik yang disediakan oleh https://reqres.in/.

## Fitur Utama

* **Login:** Pengguna dapat masuk dengan mengisi formulir login yang mencakup alamat email dan kata sandi.
* **Daftar Kontak:** Pengguna dapat melihat daftar semua kontak.
* **Detail Kontak:** Pengguna dapat melihat detail kontak tertentu.
* **Perbarui Kontak:** Pengguna dapat memperbarui informasi kontak.
* **Hapus Kontak:** Pengguna dapat menghapus kontak.

## Kelebihan

* **Sederhana:** Aplikasi ini mudah digunakan dan dipelajari.
* **Portabel:** Aplikasi ini dapat diakses dari perangkat apa pun.
* **Gratis:** Aplikasi ini tersedia secara gratis.

## Instalasi

Untuk menginstal ContactU, perlu memiliki Node.js dan npm yang terinstal di komputer.

1. Clone repositori ini:

```
git clone https://github.com/Rayhanns04/contactu.git
```

2. Masuk ke direktori proyek:

```
cd contactu
```

3. Instal dependensi:

```
yarn install
```

4. Jalankan aplikasi:

```
yarn run dev
```

## Penggunaan 
// saya ingin mencamtumkan account yang bisa digunakan didalam pengguna ini
untuk login gunakan email dan password berikut:

```
email: eve.holt@reqres.in
password: cityslicka
```

Untuk menggunakan ContactU, buka browser dan arahkan ke http://localhost:3000 or http://contactu-hans.surge.sh/

## Deploy to Server

Untuk deployment ke server, perlu memiliki surge.

1. Install surge:

```
npm install --global surge
```

2. Jalankan perintah berikut:

```
yarn run build
```

3. Jalankan perintah berikut:

```
surge
```

4. Masukkan alamat domain yang diinginkan:

```
contactu-hans.surge.sh
```

5. Aplikasi dapat diakses melalui alamat domain tersebut.
6. Untuk menghapus aplikasi dari server, jalankan perintah berikut:

```
surge teardown contactu-hans.surge.sh
```