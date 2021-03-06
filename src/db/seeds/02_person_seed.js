exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
      .then(function () {
          // Inserts seed entries
          return knex('person').insert([
              {
                  personId: 1,
                  shibbolethId: 'amandaadmininshibboId',
                  email: 'amanda@admin.com',
                  title: 'Dr.',
                  firstname: 'Amanda',
                  lastname: 'Admin',
                  isRetired: false,
                  address: ('Leppäsuonkatu'),
                  phone: '050 1234567',
                  major: 'Käpistely'
              },
              {
                  personId: 2,
                  shibbolethId: 'harrihallinnonshibboId',
                  email: 'harri@hallinto.com',
                  title: 'Prof.',
                  firstname: 'Harri',
                  lastname: 'CS-Hallinto',
                  isRetired: false,
                  studentNumber: ('0123845679'),
                  address: ('Leppäsuonkatu'),
                  phone: '050 1234567',
                  major: 'Matte'
              },
              {
                  personId: 3,
                  shibbolethId: 'petraprinttaajanshibboId',
                  email: 'petra@printtaaja.com',
                  title: 'Other',
                  firstname: 'Petra',
                  lastname: 'CS-Printtaaja',
                  isRetired: false,
                  studentNumber: ('0123456787'),
                  address: ('Väinö Auerin katu'),
                  phone: '050 1234567',
                  major: 'Kemma'
              },
              {
                  personId: 4,
                  shibbolethId: 'victoriaproffanshibboId',
                  email: 'victoria@vastuuproffa.com',
                  title: 'Dr.',
                  firstname: 'Victoria',
                  lastname: 'CS-Vastuuproffa',
                  isRetired: true,
                  studentNumber: ('0128345676'),
                  address: ('Mannerheimintie'),
                  phone: '050 1234567',
                  major: 'geologiaa'
              },
              {
                  personId: 5,
                  shibbolethId: 'thomastarkastajashibboId',
                  email: 'thomas@tarkastaja.com',
                  title: '',
                  firstname: 'Thomas',
                  lastname: 'CS-Tarkastaja',
                  isRetired: false,
                  studentNumber: ('876548321'),
                  address: ('Intiankatu'),
                  phone: '050 1234567',
                  major: 'mathematics'
              },
              {
                  personId: 6,
                  shibbolethId: 'olliohjaajanshibboId',
                  email: 'olli@ohjaaja.com',
                  title: '',
                  firstname: 'Olli',
                  lastname: 'CS-Ohjaaja',
                  isRetired: false,
                  studentNumber: ('8768325'),
                  address: ('Intiankatu'),
                  phone: '050 1234567',
                  major: 'mathematics'
              },
              {
                  personId: 7,
                  shibbolethId: 'oliviaopiskelijanshibboId',
                  email: 'olivia@opiskelija.com',
                  title: '',
                  firstname: 'Olivia',
                  lastname: 'CS-Opiskelija',
                  isRetired: false,
                  studentNumber: ('876544'),
                  address: ('Intiankatu'),
                  phone: '050 1234567',
                  major: 'mathematics'
              },
              {
                  personId: 8,
                  shibbolethId: 'venlavastuuproffanshibboId',
                  email: 'venla@vastuuproffa.com',
                  title: '',
                  firstname: 'Venla',
                  lastname: 'Math-Vastuuproffa',
                  isRetired: false,
                  studentNumber: ('654323'),
                  address: ('Intiankatu'),
                  phone: '050 1234567',
                  major: 'mathematics'
              },
              {
                personId: 9,
                shibbolethId: 'annapuunshibboId',
                email: 'anna@puu.com',
                title: '',
                firstname: 'Anna',
                lastname: 'Puu',
                isRetired: false,
                studentNumber: ('854322'),
                address: ('Intiankatu'),
                phone: '050 1234567',
                major: 'mathematics'
              },
              {
                personId: 10,
                shibbolethId: 'tarjaopiskelijanshibboId',
                email: 'tarja@opiskelija.com',
                title: '',
                firstname: 'Tarja',
                lastname: 'Math+CS-Opiskelija',
                isRetired: false,
                studentNumber: ('8763219'),
                address: ('Intiankatu'),
                phone: '050 1234567',
                major: 'mathematics'
              },
              {
                personId: 11,
                shibbolethId: 'erkkierikoistapauksenshibboId',
                email: 'erkki@erikoistapaus.com',
                title: '',
                firstname: 'Erkki',
                lastname: 'Erikoistapaus',
                isRetired: false,
                studentNumber: ('8765419'),
                address: ('Intiankatu'),
                phone: '050 1234567',
                major: 'mathematics'
              },
              {
                personId: 12,
                shibbolethId: 'tubotöhönshibboId',
                email: 'turbo@töhö.com',
                title: 'Dr.',
                firstname: 'Turbo',
                lastname: 'Töhö',
                isRetired: false,
                studentNumber: ('24877292'),
                address: ('Hesen Maikkari'),
                phone: '050 98765432',
                major: 'käpistely'
              }
          ]);
      });
};
