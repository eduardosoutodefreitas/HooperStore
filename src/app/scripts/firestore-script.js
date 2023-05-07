const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyAYZK1PhdUmPHS4IEW97UBiUxES75wnNBQ',
  authDomain: 'hooperstore-d8265.firebaseapp.com',
  projectId: 'hooperstore-d8265',
  storageBucket: 'hooperstore-d8265.appspot.com',
  messagingSenderId: '498615576606',
  appId: '1:498615576606:web:64e0173f1bcb33860e660f'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
  {
    id: '6228f760b7e6cb904bbe012e',
    name: 'balls',
    displayName: 'Bolas',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/04/05/09/03/ball-3292243_960_720.jpg',
    products: [
      {
        id: '6228f7a3b7e6cb904bbe0134',
        name: 'Spalding Streetball',
        price: 1.9,
        oldPrice: 3.5,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'Wilson March Madness',
        price: 1.0,
        oldPrice: 3.2,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1523142096306-cca37b5aa001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'Molten FIBA',
        price: 1.5,
        oldPrice: 3.5,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1505747877606-af82e0613846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Wilson NCAA',
        price: 1.2,
        oldPrice: 2.0,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Wilson EVO',
        price: 1.0,
        oldPrice: 1.9,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1614491740058-397038425e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'Nike ELITE',
        price: 1.2,
        oldPrice: 2.2,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Spalding NBA',
        price: 1.3,
        oldPrice: 2.0,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Spalding TF-250',
        price: 1.5,
        oldPrice: 3.9,
        tag: 'bolas',
        imageUrl:
          'https://images.unsplash.com/photo-1653191584476-9b7b47f9a8c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80'
      }
    ]
  },
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'sneakers',
    displayName: 'Tênis',
    imageUrl:
      'https://i.pinimg.com/564x/3e/aa/a7/3eaaa77b8c322c02d4d2d8c2ca51efc3.jpg',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'Nike Air Branco',
        price: 1.9,
        oldPrice: 4.0,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1645928565297-47f4708dc978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'Nike Air Jordan',
        price: 2.9,
        oldPrice: 6.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'Nike Air Max Preto',
        price: 1.5,
        oldPrice: 4.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1522005574800-a4365645f893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Nike Air Max Amarelo',
        price: 2.5,
        oldPrice: 5.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228fd3bb7e6cb904bbe015a',
        name: 'Nike Zoom Azul',
        price: 1.5,
        oldPrice: 5.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1635770997862-2b93a75f4856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228fda4b7e6cb904bbe015f',
        name: 'Fila Azul Cano Médio',
        price: 1.0,
        oldPrice: 2.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1635770997852-57b433492848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
      },
      {
        id: '6228fca3b7e6cb904bbe0150',
        name: 'Jordan 1 Retro',
        price: 1.5,
        oldPrice: 4.5,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1611075893146-1bbb4078560f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
      },
      {
        id: '6228fd63b7e6cb904bbe015c',
        name: 'Nike Jordan Low',
        price: 2.9,
        oldPrice: 5.9,
        tag: 'tênis',
        imageUrl:
          'https://images.unsplash.com/photo-1579198413527-1d9d1a80dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
      }
    ]
  },
  {
    id: '623064ee22376f1e6b869471',
    name: 'male',
    displayName: 'Masculino',
    imageUrl:
      'https://i.pinimg.com/564x/49/12/d6/4912d68bcc6b6b04670e4dbd70e6cd78.jpg',
    products: [
      {
        id: '6230655f22376f1e6b869473',
        name: 'Camisa HighSchool Verde',
        price: 0.5,
        oldPrice: 2.0,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1605773741569-9a72c40fc63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'Camiseta Lakers 8',
        price: 0.9,
        oldPrice: 2.5,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1530279281203-4c60af01ee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'Camiseta Bulls',
        price: 0.5,
        oldPrice: 2.0,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1568809391772-503bcd521202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Camisa Nike Preta',
        price: 0.9,
        oldPrice: 1.5,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1646832916190-9e4c1770e604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80'
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'Camisa Street Laranja',
        price: 0.5,
        oldPrice: 1.5,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1558563467-6e7ef8faad11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'UnderArmour Segunda Pele Preta',
        price: 1.0,
        oldPrice: 2.5,
        tag: 'masculino',
        imageUrl:
          'https://images.unsplash.com/photo-1645109496862-2abe27c1aeb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Camiseta Nothing But Net',
        price: 1.5,
        oldPrice: 2.0,
        tag: 'masculino',
        imageUrl:
          'https://images.pexels.com/photos/9634932/pexels-photo-9634932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: '6228fdd8b7e6cb904bbe0162',
    name: 'female',
    displayName: 'Feminino',
    imageUrl:
      'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80',
    products: [
      {
        id: '6228fe63b7e6cb904bbe0165',
        name: 'Moletom Cinza',
        price: 0.9,
        oldPrice: 2.9,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Conjunto Esportivo Amarelo',
        price: 1.5,
        oldPrice: 3.9,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80'
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Top Nike',
        price: 0.5,
        oldPrice: 0.9,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1512399370925-f7b84cf7a66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Camiseta Bulls',
        price: 1.0,
        oldPrice: 2.0,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1527066413387-de657047c963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
      },
      {
        id: '6228fe80b7e6cb904bbe0168',
        name: 'Camiseta Lakers 23',
        price: 1.5,
        oldPrice: 3.5,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1556441693-e27bc50c45c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
      },
      {
        id: '6228ff31b7e6cb904bbe0172',
        name: 'Camisa Segunda Pele Branca',
        price: 1.0,
        oldPrice: 2.9,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1616448208833-f42328fad6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=427&q=80'
      },
      {
        id: '62290014b7e6cb904bbe017c',
        name: 'Short Preto e Branco',
        price: 1.5,
        oldPrice: 3.5,
        tag: 'feminino',
        imageUrl:
          'https://images.unsplash.com/photo-1618374786896-d4985e2df9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      }
    ]
  },
  {
    id: '6228f52eb7e6cb904bbe0111',
    name: 'accessories',
    displayName: 'Acessórios',
    imageUrl:
      'https://i.pinimg.com/564x/fb/2e/95/fb2e95e52758d9e69ab92996beb66b15.jpg',
    products: [
      {
        id: '6228f5beb7e6cb904bbe0119',
        name: 'Boné Jordan Preto',
        price: 0.5,
        oldPrice: 1.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1656769338693-42e487aeab65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Boné TOPA',
        price: 0.5,
        oldPrice: 1.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'Gorro Lakers',
        price: 1.0,
        oldPrice: 2.0,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1530227826287-f12d70f4ee18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Garrafa 1lt',
        price: 0.9,
        oldPrice: 1.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1643665767099-a19f96816171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Relógio Fifth',
        price: 2.5,
        oldPrice: 5.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1474859740426-f0db7f4f5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Bolsa Esportiva',
        price: 1.0,
        oldPrice: 4.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1643467357478-47a617e95340?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Pochete Vermelha',
        price: 0.9,
        oldPrice: 1.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.pexels.com/photos/2080753/pexels-photo-2080753.jpeg'
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Bandanas Variadas',
        price: 0.5,
        oldPrice: 1.5,
        tag: 'acessórios',
        imageUrl:
          'https://images.unsplash.com/photo-1601938219471-fb3393955f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ]
  }
]

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, 'categories'), category)
    })
  )
}

main().then(() => process.exit())
