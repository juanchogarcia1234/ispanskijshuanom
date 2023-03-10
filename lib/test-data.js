export async function getAllPosts() {
  const posts = postsGenerator();
  const response = {
    data: {
      posts: {
        nodes: posts,
      },
    },
  };
  return response;
}

export async function getPostByUri(uri) {
  const posts = postsGenerator();
  const post = posts.filter((post) => post.uri === `/${uri}`)[0];
  const response = {
    data: {
      post,
    },
  };
  return response;
}

function postsGenerator() {
  return [
    {
      title: "Blog Post Title 1",
      content: loremIpsum,
      uri: "/title-1",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart",
        },
      },
      date: "02/31/2022",
    },
    {
      title: "Blog Post Title 2",
      content: loremIpsum,
      uri: "/title-2",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart",
        },
      },
      date: "02/31/2022",
    },
    {
      title: "Blog Post Title 3",
      content: loremIpsum,
      uri: "/title-3",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart",
        },
      },
      date: "02/31/2022",
    },
    {
      title: "Blog Post Title 4",
      content: loremIpsum,
      uri: "/title-4",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart",
        },
      },
      date: "02/31/2022",
    },
  ];
}

const loremIpsum =
  "Сейчас весь мир только и говорит, что об Аргентине, ведь произошло важное событие в мире футбола: южноамериканская страна стала чемпионом мира после 36-летнего перерыва. Этот матч многие называют невероятным, так как до последнего ответ на вопрос: «Кто победит – Аргентина или Франция?» оставался открытым. Хотя всё же нашлись те, кто сказал, что победа в серии пенальти не есть истинная победа, а скорее, везение. Пусть и так, но щепотка удачи ещё никогда не была лишней в коктейле из трудолюбия и целеустремлённости. Сегодня предлагаем вспомнить, как Аргентина одерживала победу на предыдущих чемпионатах мира по футболу, а также попытаться найти ответ на вопрос, почему в Аргентине так любят футбол? 1986 год. 13-й Чемпионат мира по футболу принимает Мексика. Североамериканская страна делает это во второй раз. Поначалу планировалось, что Колумбия станет страной-хозяйкой мундиаля, однако государство изумрудов не было готово встречать 24 команды. В итоге из других претендентов, коими были США, Канада и Мексика, последняя стала организатором турнира. Любопытно, что в 1985 году вспыхнуло одно из самых страшных землетрясений в истории Америки, основной удар которого пришёлся на центральные и северные районы Мехико. Но, благо, стадионы не пострадали. Одним словом, ни число 13, именуемое «чёртовой дюжиной», ни природные катаклизмы не смогли помешать чемпионату мира состояться, а сборной Аргентины одержать в нём победу. Хотя отчасти этого могло и не быть, если бы не известный гол Диего Марадоны в четверть-финале, который ещё называют «рукой Бога». Дело в том, что футболист настиг мяч левым кулаком и отправил в ворота англичан. Рефери посчитал, что мяч был забит головой, и, несмотря на возмущение английских игроков, гол был засчитан.";
