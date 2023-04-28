export interface University {
  id: number;
  name: string;
  img: string;
  description: string;
  url: string;
}

export const universities = [
  {
      id: 1,
      name: 'KBTU',
      description: 'The idea of creating the Kazakh-British Technical University belongs to the President of the Republic of Kazakhstan Nursultan Nazarbayev. In order to implement the agreements and arrangements in the field of education and science reached during the official visit of the President of the Republic of Kazakhstan N.A.Nazarbayev to the United Kingdom of Great Britain and Northern Ireland in November 2000, the Government of the Republic of Kazakhstan established JSC',
      img: "https://kbtu.edu.kz/images/kbtu_logo_min.png",
      url: "https://kbtu.edu.kz/ru/"
  },
  {
      id: 2,
      name: 'SDU',
      description: 'Suleiman Demirel University was opened in 1996 with the participation of the First President of Kazakhstan – Elbasy Nursultan Nazarbayev and the 9th President of Turkey – Suleiman Demirel. The main goal of the Strategic Development Plan of the University is to become one of the best international universities in the country and throughout Central Asia.',
      img: "https://kbtu.edu.kz/images/kbtu_logo_min.png",
      url: "https://sdu.edu.kz/ru/suleyman-demirel-university-ru/"
  }
];
