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
      img: "https://sdu.edu.kz/wp-content/uploads/2019/09/SDU-logo@2x.svg",
      url: "https://sdu.edu.kz/ru/suleyman-demirel-university-ru/"
  },
  {
    id: 3,
    name: 'Narxoz',
    description: 'Suleiman Demirel University was opened in 1996 with the participation of the First President of Kazakhstan – Elbasy Nursultan Nazarbayev and the 9th President of Turkey – Suleiman Demirel. The main goal of the Strategic Development Plan of the University is to become one of the best international universities in the country and throughout Central Asia.',
    img: "https://narxoz.edu.kz/images_1/tild3966-3736-4666-b434-333337386661__1_obr.svg",
    url: "https://narxoz.edu.kz/"
  },
  {
    id: 4,
    name: 'KAZNU',
    description: "KazNU is the oldest classical university of the Republic established by a Decree of the Kazakh Regional Committee (KRC) office dated November 13, 1933. One year after Kazakhstan's 1990 declaration of independence, the name was changed to Al-Farabi Kazakh State University. According to the QS World University Rankings 2021 KazNU takes 165th place in the rating of the best universities of the world.",
    img: "https://www.kaznu.kg/assets/images/logonew.png",
    url: "https://www.kaznu.kz/ru"
  },
  {
    id: 5,
    name: 'Astana IT',
    description: 'Astana IT University is the leader of innovative continuous IT education and science with stable academic traditions and high social responsibility',
    img: "https://astanait.edu.kz/wp-content/uploads/2020/05/aitu-logo-3.png",
    url: "https://astanait.edu.kz/"
  }
];
export interface AuthToken {
  token: string;
}
