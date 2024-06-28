# Razzaq-suppress

## Deskripsi
Proyek ini bertujuan untuk menyediakan sebuah script untuk menyembunyikan output dari `console.log` yang ditargetkan dalam lingkungan JavaScript.

## Fitur Utama
- Script untuk menyembunyikan output `console.log` berdasarkan teks yang ditentukan.
- Memanfaatkan fitur ES Modules (ESM) untuk pengelolaan dependensi.

## Instalasi
1. Pastikan Node.js telah terinstal di sistem Anda.
2. Install proyek dengan menggunakan npm:
```bash
npm install razzaq-suppress
```

## Penggunaan
```javascript
import { suppressLog } from "razzaq-suppress";

// Contoh penggunaan
suppressLog("target"); // Mengabaikan semua log yang mengandung "target"
```

## Kontribusi
Silakan ikuti panduan [CONTRIBUTING.md](CONTRIBUTING.md) untuk berkontribusi pada proyek ini.

## Lisensi
[MIT](LICENSE) © Arifi Razzaq
