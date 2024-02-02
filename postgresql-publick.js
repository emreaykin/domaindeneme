import pg from 'pg';
const { Client } = pg;

// PostgreSQL bağlantı bilgileri
const client = new Client({
  user: 'user',
  host: '80.209.243.185',
  database: 'users',
  password: '11ce33dE',
  port: 9000,
});

// PostgreSQL sunucusuna bağlanma
client.connect()
    .then(() => {
        console.log('PostgreSQL veritabanına bağlandı!');
        // Mevcut tabloları sorgula
        return client.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            AND table_type = 'BASE TABLE';
        `);
    })
    .then((result) => {
        console.log('Mevcut tablolar:');
        result.rows.forEach((row) => {
            console.log(row.table_name);
        });
    })
    .catch((err) => {
        console.error('Bağlantı hatası:', err);
    })
    .finally(() => {
        // Bağlantıyı kapat
        client.end();
    });